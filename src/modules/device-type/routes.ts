import { FastifyTypedInstance } from "@/types";
import { DeviceTypeController } from "./controller";
import {
  createDeviceTypeSchema,
  deviceTypeSchema,
  DeviceTypeWithDevice,
} from "./schema";
import z from "zod";

export const deviceTypeRoutes = (fastify: FastifyTypedInstance) => {
  fastify.get(
    "/device-type",
    {
      schema: {
        tags: ["DeviceType"],
        description: "List DeviceType",
        querystring: z.object({
          name: z.string().optional(),
          code: z.string().optional(),
        }),
        response: {
          200: DeviceTypeWithDevice.array(),
          400: z.object({
            error: z.string(),
          }),
        },
      },
    },
    DeviceTypeController.list,
  );

  fastify.post(
    "/device-type",
    {
      schema: {
        tags: ["DeviceType"],
        description: "Add new DeviceType",
        body: createDeviceTypeSchema,
        response: {
          201: deviceTypeSchema,
          400: z.object({
            error: z.string(),
          }),
        },
      },
    },
    DeviceTypeController.create,
  );
};
