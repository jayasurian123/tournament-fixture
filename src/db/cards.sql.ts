import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { matches } from './matches.sql';
import { teams } from './teams.sql';

export const cards = sqliteTable('cards', {
  cardId: integer('card_id', { mode: 'number' }).primaryKey({
    autoIncrement: true
  }),
  matchId: integer('match_id')
    .notNull()
    .references(() => matches.matchId),
  receivingTeamId: integer('receiving_team_id').references(() => teams.teamId),
  receivingPlayerId: integer('receiving_player_id').references(
    () => teams.teamId
  ),
  cardType: text('card_type', { enum: ['yellow', 'red'] }).notNull(),
  minute: integer('minute', { mode: 'number' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
});
