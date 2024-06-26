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
  name: text("name").notNull(),
})

export type Affiliation = typeof affiliations.$inferSelect
export type NewAffiliation = typeof affiliations.$inferInsert

export const planets = sqliteTable("planets", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
})

export type Planet = typeof planets.$inferSelect
export type NewPlanet = typeof planets.$inferInsert

export const shipClasses = sqliteTable("ship_classes", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
})

export type ShipClass = typeof shipClasses.$inferSelect
export type NewShipClass = typeof shipClasses.$inferInsert

export const ships = sqliteTable("ships", {
  id: integer("id", { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  ship_class: integer("ship_class").references(() => shipClasses.id).notNull(),
  affiliations: integer("affiliations").references(() => affiliations.id).notNull(),
})