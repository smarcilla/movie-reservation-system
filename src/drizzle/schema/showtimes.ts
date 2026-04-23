import { pgTable, serial, timestamp, integer } from 'drizzle-orm/pg-core';

export const showtimes = pgTable('showtimes', {
  id: serial('id').primaryKey(),
  movieId: integer('movie_id').notNull(),
  screenId: integer('screen_id').notNull(),
  startTime: timestamp('start_time').notNull(),
  endTime: timestamp('end_time').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type Showtime = typeof showtimes.$inferSelect;
export type NewShowtime = typeof showtimes.$inferInsert;
