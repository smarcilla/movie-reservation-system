import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
} from 'drizzle-orm/pg-core';

export const seats = pgTable('seats', {
  id: serial('id').primaryKey(),
  screenId: integer('screen_id').notNull(),
  row: varchar('row', { length: 5 }).notNull(),
  number: integer('number').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type Seat = typeof seats.$inferSelect;
export type NewSeat = typeof seats.$inferInsert;
