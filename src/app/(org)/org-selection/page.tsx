import { OrganizationList } from "@clerk/nextjs"

export default function OrgSelectionPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <OrganizationList
        hidePersonal={true}
        afterSelectOrganizationUrl="/"
        afterCreateOrganizationUrl="/"
        appearance={{
          elelments: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          },
        }}
      />
    </div>
  )
}
