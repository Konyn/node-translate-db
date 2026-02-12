import { CreateDeviceTypeInput } from "./schema";

export type CreateDeviceTypeRequest = {
  body: CreateDeviceTypeInput;
};

export type DeviceTypeRequest = {
  query: {
    name?: string;
  };
};
