import { DeviceSchemaWithDeviceTypes } from "@/modules/device/schema";
import { transformDeviceType } from "./deviceType";

export const transformDevice = <T extends DeviceSchemaWithDeviceTypes>(
  entity: T,
): T => {
  return {
    ...entity,
    deviceType: transformDeviceType(entity.deviceType),
  };
};
