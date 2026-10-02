DROP FUNCTION public.start_application(text,text,text);
DROP FUNCTION public.save_application_answer(uuid,uuid,text,text,boolean);
GRANT SELECT (id) ON public.applications TO anon, authenticated;
GRANT UPDATE (business, absence_impact, recurring_pattern, desired_outcome, investment_readiness, referral_source, status) ON public.applications TO anon, authenticated;
CREATE POLICY "Application id visible only while saving with private token" ON public.applications FOR SELECT TO anon, authenticated USING (edit_token::text = current_setting('request.application_token', true));
CREATE POLICY "Application editable only while saving with private token" ON public.applications FOR UPDATE TO anon, authenticated USING (edit_token::text = current_setting('request.application_token', true) AND status = 'started') WITH CHECK (edit_token::text = current_setting('request.application_token', true) AND status IN ('started', 'complete'));
CREATE FUNCTION public.save_application_answer(p_application_id uuid, p_application_token uuid, p_field text, p_answer text, p_complete boolean DEFAULT false)
RETURNS void LANGUAGE plpgsql SECURITY INVOKER SET search_path = public AS $$
DECLARE v_count integer;
BEGIN
  IF p_application_id IS NULL OR p_application_token IS NULL OR p_field NOT IN ('business', 'absence_impact', 'recurring_pattern', 'desired_outcome', 'investment_readiness', 'referral_source') THEN
    RAISE EXCEPTION 'Invalid application answer';
  END IF;
  PERFORM set_config('request.application_token', p_application_token::text, true);
  IF p_field = 'business' THEN UPDATE public.applications SET business = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE status END WHERE id = p_application_id;
  ELSIF p_field = 'absence_impact' THEN UPDATE public.applications SET absence_impact = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE status END WHERE id = p_application_id;
  ELSIF p_field = 'recurring_pattern' THEN UPDATE public.applications SET recurring_pattern = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE status END WHERE id = p_application_id;
  ELSIF p_field = 'desired_outcome' THEN UPDATE public.applications SET desired_outcome = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE status END WHERE id = p_application_id;
  ELSIF p_field = 'investment_readiness' THEN UPDATE public.applications SET investment_readiness = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE status END WHERE id = p_application_id;
  ELSIF p_field = 'referral_source' THEN UPDATE public.applications SET referral_source = NULLIF(btrim(p_answer), ''), status = CASE WHEN p_complete THEN 'complete' ELSE status END WHERE id = p_application_id;
  END IF;
  GET DIAGNOSTICS v_count = ROW_COUNT;
  IF v_count <> 1 THEN RAISE EXCEPTION 'Application not available'; END IF;
END;
$$;
REVOKE ALL ON FUNCTION public.save_application_answer(uuid,uuid,text,text,boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.save_application_answer(uuid,uuid,text,text,boolean) TO anon, authenticated;