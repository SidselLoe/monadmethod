# Project Architecture Rules

- Keep page-specific navigation calls to action configurable through `Navigation` props so global call-booking behavior stays unchanged.
- Store Monad OS applications in the `applications` table; visitors can start records and save answers only with a private per-application token, while public reads and deletes remain blocked to protect applicant data.