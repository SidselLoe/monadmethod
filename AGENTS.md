# Project Architecture Rules

- Keep page-specific navigation calls to action configurable through `Navigation` props so global call-booking behavior stays unchanged.
- Store Monad OS cohort applications in the `applications` table; public clients may create records but cannot read, edit, or delete them.