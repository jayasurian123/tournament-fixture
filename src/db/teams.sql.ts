import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { tournaments } from './tournaments.sql';
import { relations } from 'drizzle-orm';

export const teams = sqliteTable('teams', {
  teamId: integer('team_id', { mode: 'number' }).primaryKey({
    autoIncrement: true
  }),
  tournamentId: integer('tournament_id')
    .notNull()
    .references(() => tournaments.tournamentId),
  teamName: text('team_name').notNull().unique(),
  groupName: text('group_name'),
  contactPerson: text('contact_person'),
  contactNumber: text('contact_number'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
});

export const teamsRelations = relations(teams, ({ one }) => ({
  tournament: one(tournaments, {
    fields: [teams.tournamentId],
    references: [tournaments.tournamentId]
  })
}));
