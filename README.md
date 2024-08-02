# Booking FE Boilerplate

This is a boilerplate for a booking frontend application. This README is still a work in progress.

# Environment Variables
We store environment variables in the following places:
- `.env` as an example and description of variables, publicly accessible, contains only default values
- `.env.local` for local development, not committed, may contains sensitive information

# TODO
- [x] **Framework**: Next.js 14 (with TypeScript)
- [x] **UI**: Mantine (Figma: https://www.figma.com/community/file/1293978471602433537/pretine-the-mantine-ui-kit-library-v7)
- [ ] **Icon**: decide by ui team
  - Lucide
  - Tabler
  - FontAwesome
  - Feather
  - Find more: https://icones.js.org
- [x] **Map**: GoogleMap
- [x] **i18n**: next-intl
- [x] **validation**: zod https://zod.dev
- [x] **linting tool**: eslint + prettier
- [x] **linting style**: airbnb https://github.com/airbnb/javascript?tab=readme-ov-file
- [ ] **query management**: tanstack query
- [ ] **preview platform**: vercel


- [x] **i18n platform**: local json
- [x] **form building**: Mantine Form
- [x] **commit style**: conventional `fix(api): fix wrong calculation of request body checksum` https://www.conventionalcommits.org/en/v1.0.0/
- [ ] **error monitoring**: sentry? same as backend?
- [ ] **logging tool**: pino.js
- [ ] **log management**: selfhost? graylog? datadog? same as backend?
- [ ] **request library**: ofetch https://github.com/unjs/ofetch
- [x] **UI custom**: css modules

- [ ] semantic release
- [x] husky
- [x] lint-staged
- [x] commitlint
- [ ] commitizen
- [x] bundler analyzer

~~**unit test**: vitest? jest?~~
~~**integration&e2e test**: playwright?  puppeteer? selenium? cypress?~~
~~we dont want write test~~

~~**monitoring as code**: maybe too heavy~~
~~**visual testing**: maybe too heavy~~
~~**rich text editor**: tiptap (with mantine)? lexical? we might not need~~ 
~~**state management**: may not need, add when need~~


and more?
