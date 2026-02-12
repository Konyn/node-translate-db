import z from "zod";
import { deviceTypeSchema } from "../device-type/schema";

export const createDeviceSchema = z.object({
  name: z.string().min(3),
  locationDescription: z.string(),
  deviceTypeId: z.number(),
});

export type CreateDeviceInput = z.infer<typeof createDeviceSchema>;

export const updateDeviceSchema = createDeviceSchema.extend({});

export type UpdateDeviceSchema = z.infer<typeof createDeviceSchema>;

export const DeviceSchema = z.object({
  id: z.number(),
  ...createDeviceSchema.shape,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const deviceSchemaWithDeviceTypes = z.object({
  id: z.number(),
  ...createDeviceSchema.shape,
  deviceType: z.lazy(() => deviceTypeSchema),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type DeviceSchemaWithDeviceTypes = z.infer<
  typeof deviceSchemaWithDeviceTypes
>;
