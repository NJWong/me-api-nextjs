import { shipClasses } from "@/drizzle/schema";
import { getPaginationParams } from "@/helpers/pagination";
import { db } from "@/lib/db";
import { count } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const { limit, offset } = getPaginationParams(searchParams)

    const total = await db.select({ value: count() }).from(shipClasses)
    const result = await db.select().from(shipClasses).orderBy(shipClasses.id).limit(limit).offset(offset)

    const data = result.map((ship_class) => ({
      id: ship_class.id,
      name: ship_class.name,
    }))

    return Response.json({ status: 200, meta: { total: total[0].value, limit, offset }, data })
  } catch {
    return Response.json({ status: 500, message: 'Internal Server Error' })
  }
}