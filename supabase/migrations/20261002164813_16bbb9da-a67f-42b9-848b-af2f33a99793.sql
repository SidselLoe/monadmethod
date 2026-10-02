CREATE OR REPLACE FUNCTION public.save_application_answer(p_application_id uuid, p_application_token uuid, p_field text, p_answer text, p_complete boolean DEFAULT false)
RETURNS void LANGUAGE plpgsql SECURITY INVOKER SET search_path = public AS $$
DECLARE v_count integer;
BEGIN
  IF p_application_id IS NULL OR p_application_token IS NULL OR p_field NOT IN ('business', 'absence_impact', 'recurring_pattern', 'desired_outcome', 'investment_readiness', 'referral_source') THEN
    RAISE EXCEPTION 'Invalid application answer';
  END IF;
  PERFORM set_config('request.application_token', p_application_token::text, true);
  IF p_field = 'business' THEN UPDATE public.applications SET business = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE 'started' END WHERE id = p_application_id;
  ELSIF p_field = 'absence_impact' THEN UPDATE public.applications SET absence_impact = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE 'started' END WHERE id = p_application_id;
  ELSIF p_field = 'recurring_pattern' THEN UPDATE public.applications SET recurring_pattern = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE 'started' END WHERE id = p_application_id;
  ELSIF p_field = 'desired_outcome' THEN UPDATE public.applications SET desired_outcome = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE 'started' END WHERE id = p_application_id;
  ELSIF p_field = 'investment_readiness' THEN UPDATE public.applications SET investment_readiness = p_answer, status = CASE WHEN p_complete THEN 'complete' ELSE 'started' END WHERE id = p_application_id;
  ELSIF p_field = 'referral_source' THEN UPDATE public.applications SET referral_source = NULLIF(btrim(p_answer), ''), status = CASE WHEN p_complete THEN 'complete' ELSE 'started' END WHERE id = p_application_id;
  END IF;
  GET DIAGNOSTICS v_count = ROW_COUNT;
  IF v_count <> 1 THEN RAISE EXCEPTION 'Application not available'; END IF;
END;
$$;