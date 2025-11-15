import { jsonb, serial, integer, pgTable, varchar, timestamp, text } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});


export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  brandName: text("brand_name").notNull(),
  website: text("website"),
  category: text("category"),
  logoUrl: text("logo_url"),
  social: jsonb("social"), // { twitter:"", youtube:"", reddit:"" }
  alertEmail: text("alert_email"),
  createdAt: timestamp("created_at").defaultNow(),
});

// BRAND KEYWORD TABLE
export const brandKeywords = pgTable("brand_keywords", {
  id: serial("id").primaryKey(),
  brandId: integer("brand_id").notNull().references(() => brands.id),
  keyword: text("keyword").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// MENTIONS TABLE (for later)
export const mentions = pgTable("mentions", {
  id: serial("id").primaryKey(),
  brandId: integer("brand_id").notNull().references(() => brands.id),
  source: text("source"),
  author: text("author"),
  content: text("content").notNull(),
  url: text("url"),
  sentimentScore: integer("sentiment_score"),
  sentimentLabel: text("sentiment_label"),
  topic: text("topic"),
  insight: text("insight"),
  createdAt: timestamp("created_at").defaultNow(),
});
