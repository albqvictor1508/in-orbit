import { and, count, eq, gte, lte, sql } from "drizzle-orm";
import { db } from "../db";
import { goalCompletions, goals } from "../db/schema";
import dayjs from "dayjs";

interface CreateGoalCompletionRequest {
  goalID: string
}

export async function createGoalCompletion({
  goalID,
}: CreateGoalCompletionRequest) {
  const firstDayOfWeek = dayjs().startOf('week').toDate();
  const lastDayOfWeek = dayjs().endOf('week').toDate();

  const goalCompletionCounts = db.$with('goal_completion_counts').as(
    db.
      select({
        goalID: goalCompletions.goalID,
        completionCount: count(goalCompletions.id).as('completionCount'),
      })
      .from(goalCompletions)
      .where(and(
        gte(goalCompletions.createdAt, firstDayOfWeek),
        lte(goalCompletions.createdAt, lastDayOfWeek)
      ))
    .groupBy(goalCompletions.goalID)
  );

    const result = await db.with(goalCompletionCounts)
    .select({
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      completionCount: sql/* sql */`
        COALESCE(${goalCompletionCounts.completionCount}, 0)
      `.mapWith(Number),
    })
    .from(goals)
    .leftJoin(goalCompletionCounts, eq(goalCompletionCounts.goalID, goals.id))
  
    //const result = await db.insert(goalCompletions).values({ goalID }).returning();
    //const goalCompletion = result[0];

    return {
        result,
    }
}