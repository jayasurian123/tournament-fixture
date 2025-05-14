import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const tournaments = sqliteTable('tournaments', {
  tournamentId: integer('tournament_id', { mode: 'number' }).primaryKey({
    autoIncrement: true
  }),
  name: text('name').notNull().unique(),
  startDate: integer('start_date', { mode: 'timestamp' }).notNull(),
  endDate: integer('start_date', { mode: 'timestamp' }),
  location: text('location'),
  isOnline: integer('is_online', { mode: 'boolean' }).default(false).notNull(),
  status: text('status', { enum: ['upcoming', 'ongoing', 'completed'] }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
});
