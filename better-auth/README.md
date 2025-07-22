# Better Auth

## Fastrack

```bash
prisma init --datasource-provider postgresql
npx prisma generate

npx @better-auth/cli generate

npx prisma migrate dev --name initial-setup
npx prisma migrate deploy
```

> When you clone the repo, make sure you run `npx prisma generate`

## Neon

* Create and connect via connection pooling.
  * **Issue**: Vercel deployment failed because `channel_binding=require` parameter in PostgreSQL connection string isn't supported by Prisma.
    * **Fix**: Remove `&channel_binding=require` from `DATABASE_URL` - keep `sslmode=require` for security.
    * **Working Syntax**: `postgresql://user:pass@localhost:5432/db?sslmode=require`
* Apply migration in production environment: `npx prisma migrate deploy`

## Install and Configure Prisma

> [Reference](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#examples-1)

* Install and configure `Prisma` following 
* Install: `npm install prisma @prisma/client`
* Init: `prisma init --datasource-provider postgresql`

``output
Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and a managed serverless Postgres database. Read: https://pris.ly/cli/beyond-orm
``

* Set environment variable `DATABASE_URL` as define in [.env.example](.env.example)
* Add a simple model to [schema.prisma](prisma/schema.prisma)

* Generate: `npx prisma generate`
* Create [prisma.ts](src/lib/prisma.ts)
* Update your `package.json` to make this part of your build process

```markdown
[
  "scripts": {
    "prisma:generate": "prisma generate",
    "build": "next build",
    "prebuild": "npm run clean && npm run flatten && npm run prisma:generate"
  }
]
```

## Install and Configure Better Auth

> [References](https://www.better-auth.com/docs/installation)

* Install `better-auth`: `npm install better-auth`
* Create and configure database [auth.ts](src/lib/auth.ts)
* Generate database tables with better-auth: `npx @better-auth/cli generate`
  * Allow overriding `./prisma/schema.prisma`
* Creates and apply a new migration in dev mode, with a name: `npx prisma migrate dev --name initial-setup`
* Add required environment variables as define in [.env.example](.env.example)

## Setup Social Authentication with Google

* Get Google credentials from `Google Cloud Console` following [this](https://www.better-auth.com/docs/authentication/google)
* Set environment variables as define in [.env.example](.env.example)
* Add Google as an authentication provider in [auth.ts](src/lib/auth.ts)

## Next.js Integration

* [Reference](https://www.better-auth.com/docs/integrations/next)

### Create API Route

#### For `pages` route

`pages/api/auth/[...all].ts`

```typescript
import { toNodeHandler } from "better-auth/node"
import { auth } from "@/lib/auth"
 
// Disallow body parsing, we will parse it manually
export const config = { api: { bodyParser: false } }
 
export default toNodeHandler(auth.handler)
```

#### For `app` route

`api/auth/[...all]/route.ts`

```typescript
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
 
export const { GET, POST } = toNextJsHandler(auth.handler);
```

### Create a Client

* [auth-client.ts](src/lib/auth-client.ts)
* Now you can use the client in the components.

## Testing

![db.png](images/db.png)

* Sign in with Google and check the database entry.
* In PyCharm, you can double-click the .db file to explore it.

## Vercel Configuration

* Add [vercel.json](vercel.json)

### Function Settings
- **maxDuration: 30** - Extends API route timeout from default 10s to 30s for slower database operations

### Build Environment  
- **PRISMA_GENERATE_DATAPROXY: "true"** - Generates Prisma client optimized for serverless deployment
  - Reduces bundle size
  - Improves cold start performance
  - Required for Vercel serverless functions with Prisma

## References

* [Coding Jitsu - Complete Auth Setup in Next.js with Better-Auth | Email, Social Login & Reset Password](https://youtu.be/n6rP9d3RWo8)
