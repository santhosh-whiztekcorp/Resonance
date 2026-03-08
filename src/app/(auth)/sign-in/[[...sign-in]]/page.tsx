import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elelments: {
          rootBox: "mx-auto",
          card: "shadow-lg",
        },
      }}
    />
  )
}
