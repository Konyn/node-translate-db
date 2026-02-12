import { FastifyTypedInstance } from "@/types";
import { LanguageController } from "./controller";
import { createLanguageSchema, languageSchema } from "./schema";

export const languageRoutes = async (fastify: FastifyTypedInstance) => {
  fastify.get(
    "/language",
    {
      schema: {
        tags: ["Language"],
        description: "List language",
        response:{
            200: languageSchema
        },
      },
    },
    LanguageController.list,
  );

  fastify.post(
    "/language",
    {
      schema: {
        tags: ["Language"],
        description: "Add new language",
        body: createLanguageSchema,
      },
    },
    LanguageController.create,
  );
};
