import fastify from "fastify";

const app = fastify();

app.listen({
    port: 3333,  
}).then(() => {
    console.log('to rodando na porta 3333');
});