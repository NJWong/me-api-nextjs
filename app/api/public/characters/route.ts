import { characters } from "@/drizzle/schema"
import { getCharacterFilterParams } from "@/helpers/filters"
import { getPaginationParams } from "@/helpers/pagination"
import { db } from "@/lib/db"
import { and, count, eq } from "drizzle-orm"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {  
  try {
    const searchParams = request.nextUrl.searchParams
    const { limit, offset } = getPaginationParams(searchParams)
    const { gender, species } = getCharacterFilterParams(searchParams)

    const total = await db.select({ value: count() }).from(characters)
    const result = await db.select()
      .from(characters)
      .where(
        and(
          gender ? eq(characters.gender, gender) : undefined,
          species ? eq(characters.species, species) : undefined,
        )
      )
      .orderBy(characters.id)
      .limit(limit)
      .offset(offset)

    const data = result.map((character) => ({
      id: character.id,
      name: character.name,
      speciesUrl: `/api/public/species/${character.species}`,
      genderUrl: `/api/public/genders/${character.gender}`,
      roles: character.roles?.split('|') ?? [],
      aliases: character.aliases?.split('|') ?? [],
    }))
    
    return Response.json({ status: 200, meta: { total: total[0].value, limit, offset }, data })
  } catch {
    return Response.json({ status: 500, message: 'Internal Server Error' })
  }
}