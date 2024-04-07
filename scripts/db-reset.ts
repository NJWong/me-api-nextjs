import { affiliations, characters, genders, shipClasses, ships, species } from "@/drizzle/schema"
import { createClient } from "@libsql/client"
import dotenv from 'dotenv'
import { drizzle } from "drizzle-orm/libsql"

dotenv.config({ path: '.env.local' })

async function main() {
  const turso = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  })
  
  const db = drizzle(turso)

  console.log('--- db-reset starting ---')
  
  console.log('Resetting characters table...')
  await db.delete(characters)

  console.log('Resetting ships table...')
  await db.delete(ships)

  console.log('Resetting genders table...')
  await db.delete(genders)

  console.log('Resetting species table...')
  await db.delete(species)

  console.log('Resetting affiliations table...')
  await db.delete(affiliations)

  console.log('Resetting ship_classes table...')
  await db.delete(shipClasses)
  
  console.log('--- db-reset completed ---\n')
}

main()