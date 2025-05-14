import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { matches } from './matches.sql';
import { teams } from './teams.sql';
import { players } from './players.sql';

export const substitutions = sqliteTable('substitutions', {
  substitutionId: integer('substitution_id', { mode: 'number' }).primaryKey({
    autoIncrement: true
  }),
  matchId: integer('match_id')
    .notNull()
    .references(() => matches.matchId),
  substitutingTeamId: integer('substituting_team_id')
    .notNull()
    .references(() => teams.teamId),
  playerInId: integer('player_in_id')
    .notNull()
    .references(() => players.playerId),
  playerOutId: integer('player_out_id')
    .notNull()
    .references(() => players.playerId),
  minute: integer('minute', { mode: 'number' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
});
