import z from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(), 
});

export const env = envSchema.parse(process.env);

//garante que o que está sendo chamado de '.env' realmente existe