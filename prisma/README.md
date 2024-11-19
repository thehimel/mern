# Prisma

> Configure Prisma before configuring Auth.js

## Configure Postgres

* Run Postgres server with Docker: [README.md](../postgres-server/README.md)
* Add in the `.env` file: `DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"`

## Configure Prisma

* Install: `npm install prisma @prisma/client @next-auth/prisma-adapter`
* Overview example commands: `npx prisma`
* Initialise Prisma: `npx prisma init`
* It generates: `prisma/schema.prisma` like [schema.prisma](src/prisma/schema.prisma)
* Add models in [schema.prisma](src/prisma/schema.prisma).
  * Reference: https://authjs.dev/getting-started/adapters/prisma#schema
* Create `client.ts` like [client.ts](src/prisma/client.ts)
  * Reference: https://authjs.dev/getting-started/adapters/prisma#configuration
* Apply migrations: `npx prisma migrate dev`
