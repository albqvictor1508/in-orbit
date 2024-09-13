import fastify from "fastify";
import { createGoal } from "../functions/create-goal";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { getWeekPendingGoals } from "../functions/get-weak-pending-goals";
import z from "zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/pending-goals', async () => {
    const { pendingGoals } = await getWeekPendingGoals();

    return { pendingGoals };
})

app.post('/goals', {
    schema: {
        body: z.object({
                title: z.string(),
                desiredWeeklyFrequency: z.number().int().min(1).max(7),
            })
    }
},async (request) => {
    const {title, desiredWeeklyFrequency} = request.body;

    await createGoal({
        title,
        desiredWeeklyFrequency,
    });
})

app.listen({
    port: 3333,  
}).then(() => {
    console.log('to rodando na porta 3333');
});

console.log('ta pegando o typescriptoo');


//createGoalSchema --> valida os dados enviados antes que os envie pro body, pois caso isso n seja feito, o tipo do body será 'unknow'

//serializerCompiler, validatorCompiler e ZodTypeProvider servem para auxiliar na validação dos dados