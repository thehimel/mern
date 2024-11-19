# NextAuth

## Guidelines

* [Mastering Next.js 13 with TypeScript](https://codewithmosh.com/p/mastering-next-js-13-with-typescript)
  * Authentication with Next Auth

## Prerequisite

* [Install and configure Prisma and Prisma Adapter](../prisma/README.md)

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
* Create `middleware.ts`

```typescript
export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more parameters
  // +: one or more parameters
  // ?: zero or one parameters
  matcher: [
    "/profile/:path*", // Matches all paths under /profile/
  ],
};
```

> The URLs defined in the matcher requires authentication.
> URLs define in the matcher must start with a `/`.

* Create `app/api/auth/[...nextauth]/authOptions.ts`

```typescript
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import prisma from "@/prisma/client";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
};

export default authOptions;
```

* Create `app/api/auth/[...nextauth]/route.ts`

```typescript
import NextAuth from "next-auth";

import authOptions from "@/app/api/auth/[...nextauth]/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

* Now you can use the following URL to signin: `/api/auth/signin`

## Configure Google

* Documentation by NextAuth: https://next-auth.js.org/providers/google
* Documentation by Google: https://developers.google.com/identity/protocols/oauth2
* Configuration: https://console.developers.google.com/apis/credentials
* Google Provider Options: https://github.com/nextauthjs/next-auth/blob/v4/packages/next-auth/src/providers/google.ts
* Authorized redirect URIs:
  * Production: `https://example.com/api/auth/callback/google`
  * Development: `http://localhost:3000/api/auth/callback/google`
