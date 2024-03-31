import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core"

export const genders = sqliteTable("genders", {
  id: integer("id").primaryKey(),
  name: text("name"),
})

export type Gender = typeof genders.$inferSelect
export type NewGender = typeof genders.$inferInsert

export const species = sqliteTable("species", {
  id: integer("id").primaryKey(),
  name: text("name"),
})

export type Species = typeof species.$inferSelect
export type NewSpecies = typeof species.$inferInsert

export const characters = sqliteTable("characters", {
  id: integer("id").primaryKey(),
  name: text("name"),
  speciesId: integer("species_id").references(() => species.id),
  genderId: integer("gender_id").references(() => genders.id),
  class: text("class"), 
})

export type Character = typeof characters.$inferSelect
export type NewCharacter = typeof characters.$inferInsert