import type { Request, Response } from 'express';
import { callers } from '../schema/caller'; // Adjust the import path
import { db } from '@/utils/db';

export async function handleAddCaller(req: Request, res: Response) {
  try {
    const callerData = req.body;
    callerData.userId = res.locals.user.id;

    // Perform basic validation (example: check required fields)
    if (!callerData.firstName || !callerData.lastName || !callerData.homePhone) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Insert caller data into the database using Drizzle ORM
    const result = await db.insert(callers).values(callerData).returning();

    // Respond with the newly added caller
    return res.status(201).json({ status: 'True', message: 'Data inserted successfully', result });
  }
  catch (error) {
    console.error('Error adding caller:', error);
    return res.status(500).json({ error: 'Failed to add caller' });
  }
}
