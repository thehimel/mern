import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const isDevelopment = process.env.NODE_ENV === "development";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        // Use SQLite for dev, PostgreSQL for production
        provider: isDevelopment ? "sqlite" : "postgresql",
    }),
    account: {
        // Allow users to link multiple social accounts
        accountLinking: {
            enabled: true,
        }
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
});
