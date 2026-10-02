ALTER TABLE public.applications ADD COLUMN status text NOT NULL DEFAULT 'complete' CHECK (status IN ('started', 'complete'));
ALTER TABLE public.applications ALTER COLUMN status SET DEFAULT 'started';
ALTER TABLE public.applications ADD COLUMN edit_token uuid;
ALTER TABLE public.applications ALTER COLUMN business DROP NOT NULL;
ALTER TABLE public.applications ALTER COLUMN absence_impact DROP NOT NULL;
ALTER TABLE public.applications ALTER COLUMN recurring_pattern DROP NOT NULL;
ALTER TABLE public.applications ALTER COLUMN desired_outcome DROP NOT NULL;
ALTER TABLE public.applications ALTER COLUMN investment_readiness DROP NOT NULL;
ALTER TABLE public.applications ADD CONSTRAINT applications_complete_answers_check CHECK (status = 'started' OR (business IS NOT NULL AND absence_impact IS NOT NULL AND recurring_pattern IS NOT NULL AND desired_outcome IS NOT NULL AND investment_readiness IS NOT NULL));
DROP POLICY "Anyone can submit an application" ON public.applications;
CREATE POLICY "Anyone can start an application" ON public.applications FOR INSERT TO anon, authenticated WITH CHECK (status = 'started' AND edit_token IS NOT NULL AND char_length(btrim(name)) BETWEEN 1 AND 100 AND char_length(btrim(email)) BETWEEN 3 AND 255 AND char_length(btrim(whatsapp_number)) BETWEEN 7 AND 40);
CREATE OR REPLACE FUNCTION public.start_application(p_name text, p_email text, p_whatsapp_number text)
RETURNS TABLE(application_id uuid, application_token uuid)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_id uuid; v_token uuid;
BEGIN
  IF p_name IS NULL OR char_length(btrim(p_name)) NOT BETWEEN 1 AND 100 OR p_email IS NULL OR char_length(btrim(p_email)) NOT BETWEEN 3 AND 255 OR p_whatsapp_number IS NULL OR char_length(btrim(p_whatsapp_number)) NOT BETWEEN 7 AND 40 THEN
    RAISE EXCEPTION 'Invalid application contact information';
  END IF;
  v_token := gen_random_uuid();
  INSERT INTO public.applications (name, email, whatsapp_number, edit_token, status)
  VALUES (btrim(p_name), btrim(p_email), btrim(p_whatsapp_number), v_token, 'started') RETURNING id INTO v_id;
  RETURN QUERY SELECT v_id, v_token;
END;
$$;
CREATE OR REPLACE FUNCTION public.save_application_answer(p_application_id uuid, p_application_token uuid, p_field text, p_answer text, p_complete boolean DEFAULT false)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE v_row public.applications%ROWTYPE;
BEGIN
  SELECT * INTO v_row FROM public.applications WHERE id = p_application_id AND edit_token = p_application_token AND status = 'started' FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Application not available'; END IF;
  IF p_field NOT IN ('business', 'absence_impact', 'recurring_pattern', 'desired_outcome', 'investment_readiness', 'referral_source') THEN RAISE EXCEPTION 'Invalid application field'; END IF;
  IF p_field = 'business' THEN UPDATE public.applications SET business = p_answer WHERE id = p_application_id;
  ELSIF p_field = 'absence_impact' THEN UPDATE public.applications SET absence_impact = p_answer WHERE id = p_application_id;
  ELSIF p_field = 'recurring_pattern' THEN UPDATE public.applications SET recurring_pattern = p_answer WHERE id = p_application_id;
  ELSIF p_field = 'desired_outcome' THEN UPDATE public.applications SET desired_outcome = p_answer WHERE id = p_application_id;
  ELSIF p_field = 'investment_readiness' THEN UPDATE public.applications SET investment_readiness = p_answer WHERE id = p_application_id;
  ELSIF p_field = 'referral_source' THEN UPDATE public.applications SET referral_source = NULLIF(btrim(p_answer), '') WHERE id = p_application_id;
  END IF;
  IF p_complete THEN
    UPDATE public.applications SET status = 'complete' WHERE id = p_application_id;
  END IF;
END;
$$;
REVOKE ALL ON FUNCTION public.start_application(text,text,text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.save_application_answer(uuid,uuid,text,text,boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.start_application(text,text,text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.save_application_answer(uuid,uuid,text,text,boolean) TO anon, authenticated;