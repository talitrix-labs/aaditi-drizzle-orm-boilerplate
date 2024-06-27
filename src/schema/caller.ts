import type { InferSelectModel } from 'drizzle-orm';
import { boolean, foreignKey, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { users } from '@/schema/user'; // Adjust the import as needed

export const callers = pgTable('callers', {
  id: uuid('id').notNull().primaryKey().defaultRandom(),
  firstName: varchar('firstName', { length: 255 }).notNull(),
  lastName: varchar('lastName', { length: 255 }).notNull(),
  userId: uuid('userId').notNull(),
  homePhone: varchar('homePhone', { length: 15 }).notNull(),
  mobilePhone: varchar('mobilePhone', { length: 15 }),
  workPhone: varchar('workPhone', { length: 15 }),
  relToDef: varchar('relToDef', { length: 12 }),
  homeOption: varchar('homeOption', { length: 10 }),
  howLong: varchar('howLong', { length: 12 }),
  employer: varchar('employer', { length: 255 }),
  howLongJob: varchar('howLongJob', { length: 12 }),
  bankName: text('bankName'),
  howLongDef: varchar('howLongDef', { length: 12 }),
  comments: text('comments'),
}, (table) => {
  return {
    userIdForeignKey: foreignKey({
      columns: [table.userId],
      foreignColumns: [users.id],
    }),
  };
});
