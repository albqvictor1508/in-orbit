export async function createGoalCompletion(goalID: string) {
  await fetch('http://localhost:3333/completions', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      goalID,
    }),
  })
}
