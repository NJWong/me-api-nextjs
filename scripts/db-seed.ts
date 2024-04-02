import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import dotenv from 'dotenv'
import fs from 'fs'
import Papa from 'papaparse'
import { z } from 'zod'
import { createInsertSchema } from 'drizzle-zod'
import { genders } from '@/drizzle/schema'

dotenv.config({
  path: ".env.local"
});

async function main() {
  const turso = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  })

  const db = drizzle(turso)

  console.log('--- db-seed starting ---')

  console.log('Seeding genders table...')
  fs.readFile('data/genders.csv', 'utf-8', async (err, data) => {
    if (err) {
      console.error(err)
    } else {
      const parsedCsv = Papa.parse(data, { header: true, dynamicTyping: true })

      const insertSchema = createInsertSchema(genders)
      const validatedData: Array<z.TypeOf<typeof insertSchema>> = []

      for (const row of parsedCsv.data) {
        const validatedRow = insertSchema.parse(row)
        validatedData.push(validatedRow)
      }

      await db.insert(genders).values(validatedData)
    }
  })

  console.log('--- db-seed completed ---\n')
}

main()