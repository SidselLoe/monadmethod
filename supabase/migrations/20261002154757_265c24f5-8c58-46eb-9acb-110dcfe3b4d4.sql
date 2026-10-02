CREATE TABLE public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(btrim(name)) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(btrim(email)) BETWEEN 3 AND 255),
  whatsapp_number text NOT NULL CHECK (char_length(btrim(whatsapp_number)) BETWEEN 7 AND 40),
  business text NOT NULL CHECK (char_length(btrim(business)) BETWEEN 1 AND 300),
  absence_impact text NOT NULL CHECK (absence_impact IN ('It would run fine', 'It would slow down', 'It would stall without me', 'It would fall apart')),
  recurring_pattern text NOT NULL CHECK (char_length(btrim(recurring_pattern)) BETWEEN 1 AND 2000),
  desired_outcome text NOT NULL CHECK (char_length(btrim(desired_outcome)) BETWEEN 1 AND 2000),
  investment_readiness text NOT NULL CHECK (investment_readiness IN ('Yes, in full', 'Yes, with instalments', 'Not right now')),
  referral_source text CHECK (referral_source IS NULL OR char_length(btrim(referral_source)) <= 300),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.applications TO anon, authenticated;
GRANT ALL ON public.applications TO service_role;

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
ON public.applications
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 100
  AND char_length(btrim(email)) BETWEEN 3 AND 255
  AND char_length(btrim(whatsapp_number)) BETWEEN 7 AND 40
  AND char_length(btrim(business)) BETWEEN 1 AND 300
  AND absence_impact IN ('It would run fine', 'It would slow down', 'It would stall without me', 'It would fall apart')
  AND char_length(btrim(recurring_pattern)) BETWEEN 1 AND 2000
  AND char_length(btrim(desired_outcome)) BETWEEN 1 AND 2000
  AND investment_readiness IN ('Yes, in full', 'Yes, with instalments', 'Not right now')
  AND (referral_source IS NULL OR char_length(btrim(referral_source)) <= 300)
);

CREATE OR REPLACE FUNCTION public.set_applications_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_applications_updated_at
BEFORE UPDATE ON public.applications
FOR EACH ROW
EXECUTE FUNCTION public.set_applications_updated_at();