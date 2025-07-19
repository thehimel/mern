import { createAuthClient } from "better-auth/react" // make sure to import from better-auth/react

const authClient =  createAuthClient()

export const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
        provider: "google"
    })
}
