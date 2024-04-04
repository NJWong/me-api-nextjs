import { characters } from "@/drizzle/schema"
import { getPaginationMeta } from "@/helpers/pagination"
import { db } from "@/lib/db"
import { count } from "drizzle-orm"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {  
  try {
    const searchParams = request.nextUrl.searchParams
    const { limit, offset } = getPaginationMeta(searchParams)

    const total = await db.select({ value: count() }).from(characters)
    const result = await db.select().from(characters).orderBy(characters.id).limit(limit).offset(offset)

    const data = result.map((character) => ({
      id: character.id,
      name: character.name,
      speciesUrl: `/api/public/species/${character.species}`,
      genderUrl: `/api/public/genders/${character.gender}`,
      roles: character.roles?.split('|') ?? [],
    }))
    
    return Response.json({ status: 200, meta: { total: total[0].value, limit, offset }, data })
  } catch {
    return Response.json({ status: 500, message: 'Internal Server Error' })
  }
}