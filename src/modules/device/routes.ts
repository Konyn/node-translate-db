import { deviceSchemaWithDeviceTypes } from "./schema";
import { FastifyTypedInstance } from "@/types";
import { DeviceController } from "./controller";
import z from "zod";

export const deviceRoutes = async (fastify: FastifyTypedInstance) => {
  fastify.get(
    "/device",
    {
      schema: {
        tags: ["Device"],
        description: "Add new device",
        response: {
          200: deviceSchemaWithDeviceTypes.array(),
        },
      },
    },
    DeviceController.list,
  );

  fastify.get(
    "/device/:id",
    {
      schema: {
        tags: ["Device"],
        description: "Add new device",
        params: z.object({
          id: z.string(),
        }),
        response: {
          200: deviceSchemaWithDeviceTypes,
        },
      },
    },
    DeviceController.device,
  );

  fastify.post(
    "/device",
    {
      schema: {
        tags: ["Device"],
        description: "Add new device",
        body: z.object({
          name: z.string(),
          description: z.string(),
        }),
      },
    },
    DeviceController.create,
  );
};
