import { DeviceTypeSchema } from "@/modules/device-type/schema";

export const transformDeviceType = <T extends DeviceTypeSchema>(
  entity: T,
): T => {
  if (entity.translations && entity.translations.length > 0) {
    return {
      ...entity,
      name: entity.translations[0].name,
    };
  }
  return entity;
};
