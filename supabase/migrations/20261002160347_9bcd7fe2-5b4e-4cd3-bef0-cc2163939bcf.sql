ALTER TABLE public.applications DROP CONSTRAINT applications_investment_readiness_check;

ALTER TABLE public.applications
ADD CONSTRAINT applications_investment_readiness_check
CHECK (investment_readiness IN ('Yes', 'Not right now', 'Yes, in full', 'Yes, with instalments'));