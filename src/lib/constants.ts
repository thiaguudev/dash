import { z } from "zod";

export const userCreateForm = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type userCreate = z.infer<typeof userCreateForm>;
