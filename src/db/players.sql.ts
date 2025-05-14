import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { teams } from './teams.sql';

export const players = sqliteTable('players', {
  playerId: integer('player_id', { mode: 'number' }).primaryKey({
    autoIncrement: true
  }),
  teamId: integer('team_id', { mode: 'number' })
    .notNull()
    .references(() => teams.teamId),
  playerName: text('player_name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
});

export const playersRelations = relations(players, ({ one }) => ({
  team: one(teams, {
    fields: [players.teamId],
    references: [teams.teamId]
  })
}));
