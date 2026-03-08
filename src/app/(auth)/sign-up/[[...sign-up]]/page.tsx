import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        elelments: {
          rootBox: "mx-auto",
          card: "shadow-lg",
        },
      }}
    />
  )
}
