import { affiliations } from "@/drizzle/schema";
import { getPaginationParams } from "@/helpers/pagination";
import { db } from "@/lib/db";
import { count } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const { limit, offset } = getPaginationParams(searchParams)

    const total = await db.select({ value: count() }).from(affiliations)
    const result = await db.select().from(affiliations).orderBy(affiliations.id)

    const data = result.map((affiliation) => ({
      id: affiliation.id,
      name: affiliation.name
    }))

    return Response.json({ status: 200, meta: { total: total[0].value, limit, offset }, data })
  } catch {
    return Response.json({ status: 500, message: 'Internal Server Error' })
  }
}