import { species } from "@/drizzle/schema";
import { getPaginationMeta } from "@/helpers/pagination";
import { db } from "@/lib/db";
import { count } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const { limit, offset } = getPaginationMeta(searchParams)

    const total = await db.select({ value: count() }).from(species)
    const result = await db.select().from(species).orderBy(species.id).limit(limit).offset(offset)

    const data = result.map((species) => ({
      id: species.id,
      name: species.name
    }))

    return Response.json({ status: 200, meta: { total: total[0].value, limit, offset }, data})
  } catch {
    return Response.json({ status: 500, message: 'Internal Server Error' })
  }
}