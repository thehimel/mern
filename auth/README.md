# Auth.js

> Configure Prisma before configuring Auth.js

## Setup and Configure

* Guideline: https://authjs.dev/getting-started/installation?framework=Next.js
* Install: `npm install next-auth@beta`
* Setup Environment: `npx auth secret`
  * [.env.example](.env.example)
* Create `auth.ts` at the root directory like [auth.ts](src/auth.ts)
* Create `app/api/auth/[...nextauth]/route.ts` like [route.ts](src/app/api/auth/%5B...nextauth%5D/route.ts)
* Create `middleware.ts` at the root directory like [middleware.ts](src/middleware.ts)

## Configure Provider - Google

* Guideline: https://authjs.dev/getting-started/authentication/oauth
* Callback URL: `[origin]/api/auth/callback/google`
  * Production: `https://example.com/api/auth/callback/google`
  * Development: `http://localhost:3000/api/auth/callback/google`
* Setup provider in auth.ts like [auth.ts](src/auth.ts)

## Configure Prisma

* Guidelines: https://authjs.dev/getting-started/adapters/prisma
* Install: `npm install @prisma/client @auth/prisma-adapter`
  * Make sure you do not have `@next-auth/prisma-adapter` in `package.json` file.
* Configure `client.ts` like [client.ts](../prisma/src/prisma/client.ts)
  * Reference: https://authjs.dev/getting-started/adapters/prisma#configuration
* Configure adapter in auth.js like [auth.ts](src/auth.ts)
* Create models in schema.prisma like [schema.prisma](../prisma/src/prisma/schema.prisma)
  * Reference: https://authjs.dev/getting-started/adapters/prisma#schema
* Apply migrations with `npx prisma migrate dev`.
