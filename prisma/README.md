# Prisma

## Configure Postgres

* Run Postgres server with Docker: [README.md](../postgres-server/README.md)
* Add in the `.env` file: `DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"`

## Configure Prisma

* Install: `npm install prisma @prisma/client @next-auth/prisma-adapter`
* Overview example commands: `npx prisma`
* Initialise Prisma: `npx prisma init`
* It generates: `prisma/schema.prisma`
* Add models in this file. You can take this mode: [NextAuth Prisma Model](https://next-auth.js.org/v3/adapters/prisma#setup)
* Apply migrations: `npx prisma migrate dev`
* Create `prisma/client.ts` from [here](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices#solution)

```typescript
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientType = ReturnType<typeof prismaClientSingleton>;

declare const globalThis: {
  prisma: PrismaClientType;
} & typeof global;

// Use the global prisma instance if it exists, otherwise create a new one
const prisma = globalThis.prisma ?? prismaClientSingleton();

// Export the prisma instance to be used across the application
export default prisma;

// In development, assign the prisma instance to globalThis to avoid creating new instances repeatedly
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
```
