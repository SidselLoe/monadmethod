# Project Architecture Rules

- Keep page-specific navigation calls to action configurable through `Navigation` props, with the global default directing visitors to `/apply`.
- Store Monad OS applications in the `applications` table; visitors can start records and save answers only with a private per-application token, while public reads and deletes remain blocked to protect applicant data.- Send application notification emails only from the notify-application function, which verifies the applicant's private token and stage before sending to the fixed owner address, so the browser can never choose recipients or content.
- Render split-weight page headings with an explicit ExtraBold lead span and Regular remainder so the visual hierarchy stays consistent without altering copy.
