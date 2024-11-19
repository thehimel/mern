# NextAuth

## Guidelines

* [Mastering Next.js 13 with TypeScript](https://codewithmosh.com/p/mastering-next-js-13-with-typescript)
  * Authentication with Next Auth

## Prerequisite

* [Install and configure Prisma](../prisma/README.md)

## Configuration

* Install: `npm install next-auth`
* Generate a 32-byte random value encoded in Base64 format: `openssl rand -base64 32`
* Configure environmental variables:

```
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="<32-BYTE RANDOM VALUE ENCODED IN BASE64 FORMAT>"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```
* Create [middleware.ts](src/middleware.ts)

> The URLs defined in the matcher requires authentication.
> URLs define in the matcher must start with a `/`.

* Create `app/api/auth/[...nextauth]/authOptions.ts` like [authOptions.ts](src/app/api/auth/%5B...nextauth%5D/authOptions.ts)
* Configure Prisma adapter following this [reference](https://next-auth.js.org/v3/adapters/prisma#setup)
* Prisma reference: https://authjs.dev/getting-started/adapters/prisma
* Postgres schema: https://authjs.dev/getting-started/adapters/prisma#schema

* Create `app/api/auth/[...nextauth]/route.ts` like [route.ts](src/app/api/auth/%5B...nextauth%5D/route.ts)

* Now you can use the following URL to signin: `/api/auth/signin`

## Configure Google

* Documentation by NextAuth: https://next-auth.js.org/providers/google
* Documentation by Google: https://developers.google.com/identity/protocols/oauth2
* Configuration: https://console.developers.google.com/apis/credentials
* Google Provider Options: https://github.com/nextauthjs/next-auth/blob/v4/packages/next-auth/src/providers/google.ts
* Authorized redirect URIs:
  * Production: `https://example.com/api/auth/callback/google`
  * Development: `http://localhost:3000/api/auth/callback/google`
