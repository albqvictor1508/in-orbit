import { client, db } from ".";
import { goalCompletions, goals } from "./schema";
import dayjs from "dayjs";

async function seed() {
    await db.delete(goalCompletions);
    await db.delete(goals);
    
    const result = await db.insert(goals).values([
        { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
        {title: 'me exercitar', desiredWeeklyFrequency: 3},
        {title: 'falar com minha amada', desiredWeeklyFrequency: 5}
    ]).returning();

    const startOfWeek = dayjs().startOf('week');

    await db.insert(goalCompletions).values([
        { goalID:  result[0].id, createdAt: startOfWeek.toDate()},
        { goalID:  result[1].id, createdAt: startOfWeek.add(1, 'day').toDate()},
    ])
}

seed().finally(() => {
    client.end();
});

//seed cria dados fictícios no banco de dados, pra melhorar os testes por exemplo ou pra enviar pra um amigo

//tem q ser nessa sequência pq completions depende de um id dentro de goals,se tirar goals primeiro dá erro