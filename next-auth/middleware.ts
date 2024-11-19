export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more parameters
  // +: one or more parameters
  // ?: zero or one parameters
  matcher: [
    "/profile/:path*", // Matches all paths under /profile/
  ],
};
