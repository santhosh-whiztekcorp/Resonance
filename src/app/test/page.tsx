import { db } from "@/lib/db"

export default async function TestPage() {
  const voices = await db.voice.findMany()

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Voices ({voices.length})</h1>

      <ul className="flex flex-col gap-4">
        {voices.map((voice) => {
          return (
            <li key={voice.id} className="bg-card flex flex-col gap-2 rounded-md border p-3">
              <p>
                <span>Name:</span> <span>{voice.name}</span>
              </p>
              <p>
                <span>Variant:</span> <span>{voice.variant}</span>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
