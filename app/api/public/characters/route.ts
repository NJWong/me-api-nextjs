import { characters } from "@/drizzle/schema"
import { db } from "@/lib/db"

export async function GET() {  
  try {
    const result = await db.select().from(characters).all()

    return Response.json({ status: 200, meta: {}, data: result})
  } catch {
    return Response.json({ status: 500, message: 'Internal Server Error' })
  }
}