import { characters, genders, species } from "@/drizzle/schema"
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
  
  console.log('Resetting genders table...')
  await db.delete(genders)

  console.log('Resetting species table...')
  await db.delete(species)

  console.log('Resetting characters table...')
  await db.delete(characters)
  
  console.log('--- db-reset completed ---\n')
}

main()