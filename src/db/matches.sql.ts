import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { tournaments } from './tournaments.sql';
import { teams } from './teams.sql';

export const matches = sqliteTable('matches', {
  matchId: integer('match_id', { mode: 'number' }).primaryKey({
    autoIncrement: true
  }),
  tournamentId: integer('tournament_id', { mode: 'number' })
    .notNull()
    .references(() => tournaments.tournamentId),
  matchDate: integer('match_date', { mode: 'timestamp' }).notNull(),
  matchTime: integer('match_time', { mode: 'timestamp' }),
  homeTeamId: integer('home_team_id', { mode: 'number' })
    .notNull()
    .references(() => teams.teamId),
  awayTeamId: integer('away_team_id', { mode: 'number' })
    .notNull()
    .references(() => teams.teamId),
  venue: text('venue', { mode: 'text' }),
  homeTeamScore: integer('home_team_score', { mode: 'number' }),
  awayTeamScore: integer('away_team_score', { mode: 'number' }),
  status: text('status', {
    enum: ['upcoming', 'ongoing', 'completed']
  }).default('upcoming'),
  stage: text('stage', {
    enum: [
      'group_stage',
      'quarter_final',
      'semi_final',
      'final',
      'third_place_playoff'
    ]
  }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
});
