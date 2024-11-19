import NextAuth from "next-auth";

import authOptions from "@/next-auth/src/app/api/auth/[...nextauth]/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
