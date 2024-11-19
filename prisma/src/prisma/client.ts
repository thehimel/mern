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
