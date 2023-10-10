Steps to reproduce:

1. Clone and `npm ci`
2. Uncomment line 5 (`import { neon } from '@neondatabase/serverless';`) in `src/index.ts`
3. Watch as the type errors now appear, or run `npx tsc --noEmit` to see the errors

When you don't load `@types/node`, no errors appear. When you do, the errors appear since now Request/Request/fetch global types have been changed.
