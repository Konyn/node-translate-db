import z from "zod";
import { DeviceSchema } from "../device/schema";
import { deviceTypeTranslationSchema } from "./translation/schema";

export const createDeviceTypeSchema = z.object({
  name: z.string(),
});

export type CreateDeviceTypeInput = z.infer<typeof createDeviceTypeSchema>;

export const updateDeviceType = z.object({
  ...createDeviceTypeSchema.shape,
});

export type UpdateDeviceTypeInput = z.infer<typeof updateDeviceType>;

export const deviceTypeSchema = z.object({
  id: z.number(),
  ...createDeviceTypeSchema.shape,
  createdAt: z.date(),
  updatedAt: z.date(),
  devices: z.lazy(() => DeviceSchema.array().optional()),
  translations: z.lazy(() => deviceTypeTranslationSchema.array().optional()),
});

export const DeviceTypeWithDevice = z.object({
  id: z.number(),
  ...createDeviceTypeSchema.shape,
  devices: z.lazy(() => DeviceSchema.array().optional()),
});

export type DeviceTypeSchema = z.infer<typeof deviceTypeSchema>;
