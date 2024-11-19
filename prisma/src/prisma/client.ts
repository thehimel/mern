import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientType = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientType | undefined;
};

// Use the global prisma instance if it exists, otherwise create a new one
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Export the prisma instance to be used across the application
export default prisma;

// In development, assign the prisma instance to globalThis to avoid creating new instances repeatedly
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
