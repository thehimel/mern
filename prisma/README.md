# Prisma

## Configure Postgres

* Run Postgres server with Docker: [README.md](../postgres-server/README.md)
* Add in the `.env` file: `DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"`

## Configure Prisma

* Install: `npm install prisma @prisma/client @next-auth/prisma-adapter`
* Overview example commands: `npx prisma`
* Initialise Prisma: `npx prisma init`
* It generates: `prisma/schema.prisma`
* Add models in [schema.prisma](prisma/schema.prisma). You can take this mode: [NextAuth Prisma Model](https://next-auth.js.org/v3/adapters/prisma#setup)
* Apply migrations: `npx prisma migrate dev`
* Create [client.ts](prisma/client.ts)
  * [Reference](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices#solution)
