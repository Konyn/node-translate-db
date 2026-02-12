import { FastifyTypedInstance } from "@/types";
import { SystemController } from "./controller";
import { SystemSchema, updateSystemSchema } from "./schema";
import z from "zod";

export const systemRoutes = async (fastify: FastifyTypedInstance) => {
  fastify.get(
    "/system",
    {
      schema: {
        tags: ["System"],
        description: "List system info",
        response: {
          200: SystemSchema.array(),
          400: z.object({
            error: z.string(),
          }),
        },
      },
    },
    SystemController.list,
  );

  fastify.put(
    "/system",
    {
      schema: {
        tags: ["System"],
        description: "Alter system language",
        body: updateSystemSchema,
        response: {
          204: z.object({}),
          400: z.object({
            error: z.string(),
          }),
        },
      },
    },
    SystemController.update,
  );
};
