import { languageSchema } from "@/modules/language/schema";
import z from "zod";

export const deviceTypeTranslationSchema = z.object({
  id: z.number(),
  name: z.string(),
  deviceTypeId: z.number(),
  language: z.lazy(() => languageSchema).optional(),
});

export type DeviceTypeTranslationSchema = z.infer<
  typeof deviceTypeTranslationSchema
>;
