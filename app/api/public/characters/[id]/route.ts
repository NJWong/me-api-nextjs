import { characters } from "@/drizzle/schema"
import { db } from "@/lib/db"
import { eq } from "drizzle-orm"

type RouteMeta = { params: { id: string }}

export async function GET(_: Request, meta: RouteMeta) {
  try {
    const id = parseInt(meta.params.id)
    const result = await db.select().from(characters).where(eq(characters.id, id))

    if (result.length === 0) {
      return Response.json({ status: 404, message: 'Not Found' })
    }

    return Response.json({ status: 200, data: result[0] })
  } catch {
    return Response.json({ status: 500, message: 'Internal Server Error' })
  }
}
