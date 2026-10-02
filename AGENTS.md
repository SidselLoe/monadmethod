# Project Architecture Rules

- Keep page-specific navigation calls to action configurable through `Navigation` props, with the global default directing visitors to `/apply`.
- Store Monad OS applications in the `applications` table; visitors can start records and save answers only with a private per-application token, while public reads and deletes remain blocked to protect applicant data.