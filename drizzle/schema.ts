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
  id: integer("id", { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  species: integer("species").references(() => species.id).notNull(),
  gender: integer("gender").references(() => genders.id).notNull(),
  roles: text("roles"), 
  aliases: text("aliases"),
})

export type Character = typeof characters.$inferSelect
export type NewCharacter = typeof characters.$inferInsert

export const affiliations = sqliteTable("affiliations", {
  id: integer("id").primaryKey(),
  name: text("name"),
})

export type Affiliation = typeof affiliations.$inferSelect
export type NewAffiliation = typeof affiliations.$inferInsert

export const planets = sqliteTable("planets", {
  id: integer("id").primaryKey(),
  name: text("name"),
})

export type Planet = typeof planets.$inferSelect
export type NewPlanet = typeof planets.$inferInsert