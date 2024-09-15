type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch('http://localhost:3333/summary')
  const data = await response.json()

  return data.summary
}

//função que faz o fetch da query do back-end, que recebe a formatação no tipo 'SummaryResponse' (obrigatório pelo typescript que um tipo seja passado) e envia esse fetch pro App para ser executado pela lib de fetch 'tanstack query';
