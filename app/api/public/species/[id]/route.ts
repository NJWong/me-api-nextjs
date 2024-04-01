import { species } from "@/drizzle/schema"
import { db } from "@/lib/db"
import { eq } from "drizzle-orm"

type RouteMeta = { params: { id: string }}

export async function GET(_: Request, meta: RouteMeta) {
  try {
    const id = parseInt(meta.params.id)
    const result = await db.select().from(species).where(eq(species.id, id))

    if (result.length === 0) {
      return Response.json({ status: 404, message: 'Not Found' })
    }

    const data = result.map((species) => ({
      id: species.id,
      name: species.name,
    }))[0]

    return Response.json({ status: 200, data })
  } catch {
    return Response.json({ status: 500, message: 'Internal Server Error' })
  }
}
