import { createClient } from '@libsql/client'
import { LibSQLDatabase, drizzle } from 'drizzle-orm/libsql'
import dotenv from 'dotenv'
import fs from 'fs'
import Papa from 'papaparse'
import { z } from 'zod'
import { createInsertSchema } from 'drizzle-zod'
import { affiliations, characters, genders, shipClasses, ships, species } from '@/drizzle/schema'

dotenv.config({
  path: ".env.local"
})

async function seedShipClasses(db: LibSQLDatabase) {
  console.log('Seeding ship_classes table...')
  const data = fs.readFileSync('data/ship_classes.csv', { encoding: 'utf-8' })
  const parsedCsv = Papa.parse(data, { header: true, dynamicTyping: true })

  const insertSchema = createInsertSchema(shipClasses)
  const validatedData: Array<z.TypeOf<typeof insertSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertSchema.parse(row)
    validatedData.push(validatedRow)
  }

  await db.insert(shipClasses).values(validatedData)
}

async function seedAffiliations(db: LibSQLDatabase) {
  console.log('Seeding affiliations table...')
  const data = fs.readFileSync('data/affiliations.csv', { encoding: 'utf-8' })
  const parsedCsv = Papa.parse(data, { header: true, dynamicTyping: true })

  const insertSchema = createInsertSchema(affiliations)
  const validatedData: Array<z.TypeOf<typeof insertSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertSchema.parse(row)
    validatedData.push(validatedRow)
  }

  await db.insert(affiliations).values(validatedData)
}

async function seedGenders(db: LibSQLDatabase) {
  console.log('Seeding genders table...')
  const data = fs.readFileSync('data/genders.csv', { encoding: 'utf-8' })
  const parsedCsv = Papa.parse(data, { header: true, dynamicTyping: true })

  const insertSchema = createInsertSchema(genders)
  const validatedData: Array<z.TypeOf<typeof insertSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertSchema.parse(row)
    validatedData.push(validatedRow)
  }

  await db.insert(genders).values(validatedData)
}

async function seedSpecies(db: LibSQLDatabase) {
  console.log('Seeding species table...')
  const data = fs.readFileSync('data/species.csv', { encoding: 'utf-8' })
  const parsedCsv = Papa.parse(data, { header: true, dynamicTyping: true })

  const insertSchema = createInsertSchema(species)
  const validatedData: Array<z.TypeOf<typeof insertSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertSchema.parse(row)
    validatedData.push(validatedRow)
  }

  await db.insert(species).values(validatedData)
}

async function seedShips(db: LibSQLDatabase) {
  console.log('Seeding ships table...')
  const data = fs.readFileSync('data/ships.csv', { encoding: 'utf-8' })
  const parsedCsv = Papa.parse(data, { header: true, dynamicTyping: true })

  const insertSchema = createInsertSchema(ships)
  const validatedData: Array<z.TypeOf<typeof insertSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertSchema.parse(row)
    validatedData.push(validatedRow)
  }

  await db.insert(ships).values(validatedData)
}

async function seedCharacters(db: LibSQLDatabase) {
  console.log('Seeding characters table...')
  const data = fs.readFileSync('data/characters.csv', { encoding: 'utf-8' })
  const parsedCsv = Papa.parse(data, { header: true, dynamicTyping: true })

  const insertSchema = createInsertSchema(characters)
  const validatedData: Array<z.TypeOf<typeof insertSchema>> = []

  for (const row of parsedCsv.data) {
    const validatedRow = insertSchema.parse(row)
    validatedData.push(validatedRow)
  }

  await db.insert(characters).values(validatedData)
}

async function main() {
  const turso = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  })

  const db = drizzle(turso)

  console.log('--- db-seed starting ---')
  await seedShipClasses(db)
  await seedAffiliations(db)
  await seedSpecies(db)
  await seedGenders(db)
  await seedShips(db)
  await seedCharacters(db)
  console.log('--- db-seed completed ---\n')
}

main()