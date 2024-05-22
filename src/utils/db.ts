import process from 'node:process';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import '../utils/env';
export const db = drizzle(postgres(process.env.DB_URL));
