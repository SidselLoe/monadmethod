REVOKE ALL ON public.applications FROM anon, authenticated;
GRANT INSERT ON public.applications TO anon, authenticated;
GRANT ALL ON public.applications TO service_role;