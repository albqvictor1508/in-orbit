import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { db } from "../db";
import { goalCompletions, goals } from "../db/schema";
import { and, count, gte, lte, sql, } from "drizzle-orm";

dayjs.extend(weekOfYear);//plugin que pega a semana dentro do pacote 'dayjs';

export async function getWeekPendingGoals() {
  const firstDayOfWeek = dayjs().startOf('week').toDate();
  const lastDayOfWeek = dayjs().endOf('week').toDate();

  const goalsCreatedUpToWeek = db.$with('goals_created_up_to_week').as(
    db.select({
      id: goals.id,
      title: goals.title,
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      createdAt: goals.createdAt,
    })
    .from(goals)
    .where(lte(goals.createdAt, lastDayOfWeek))
  );

  const goalCompletionCounts = db.$with('goal_completion_counts').as(
    db.select({
      goalID: goalCompletions.goalID,
      completionCount: count(goalCompletions.id),
    })
    .from(goalCompletions)
    .where(and(
      gte(goalCompletions.createdAt, firstDayOfWeek),
      lte(goalCompletions.createdAt, lastDayOfWeek)
    ))
    .groupBy(goalCompletions.goalID)
  );

  const pendingGoals  = await db
  .with(goalsCreatedUpToWeek, goalCompletionCounts)
  .select()
  .from(goalsCreatedUpToWeek)

  return { pendingGoals };
}