export { auth as middleware } from "@/auth";

export const config = {
  // *: zero or more parameters
  // +: one or more parameters
  // ?: zero or one parameters
  matcher: [
    "/profile/:path*", // Matches all paths under /profile/
  ],
};
