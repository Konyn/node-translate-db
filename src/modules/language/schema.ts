import z from "zod";

export const createLanguageSchema = z.object({
  code: z.string(),
  name: z.string(),
  rlt: z.boolean().optional(),
});

export type CreateLanguageInput = z.infer<typeof createLanguageSchema>;

export const updateLanguageSchema = z.object({
  ...createLanguageSchema.shape,
});

export type UpdateLanguageInput = z.infer<typeof updateLanguageSchema>;

export const languageSchema = z.object({
  id: z.number(),
  ...createLanguageSchema.shape,
  createdAt: z.date(),
  updatedAt: z.date(),
});
