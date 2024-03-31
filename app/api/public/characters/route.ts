import { characters } from "@/drizzle/schema"
import { db } from "@/lib/db"
import { count } from "drizzle-orm"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {  
  try {
    const searchParams = request.nextUrl.searchParams

    const limitParam = searchParams.get('limit')
    const limit = limitParam !== null ? Math.min(parseInt(limitParam), 20) : 10

    const offsetParam = searchParams.get('offset')
    const offset = offsetParam !== null ? parseInt(offsetParam) : 0

    const total = await db.select({ value: count() }).from(characters)

    const result = await db.select().from(characters).orderBy(characters.id).limit(limit).offset(offset)

    const data = result.map((character) => ({
      id: character.id,
      name: character.name,
      species: `/api/public/species/${character.speciesId}`,
      gender: `/api/public/genders/${character.genderId}`,
      class: character.class,
    }))
    
    return Response.json({ status: 200, meta: { total: total[0].value, limit, offset }, data})
  } catch {
    return Response.json({ status: 500, message: 'Internal Server Error' })
  }
}