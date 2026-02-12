import z from "zod";

export const updateSystemSchema = z.object({
  id: z.number(),
  languageId: z.number(),
});

export type UpdateSystemSchema = z.infer<typeof updateSystemSchema>;

export const SystemSchema = z.object({
  id: z.number(),
  languageId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
