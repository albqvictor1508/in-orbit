import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoalCompletion } from '../../functions/create-gol-completion'

export const createCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalID: z.string(),
        }),
      },
    },
    async request => {
      const { goalID } = request.body

      await createGoalCompletion({
        goalID,
      })
    }
  )
}
