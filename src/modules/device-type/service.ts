import { transformDeviceType } from "../translate/transform/deviceType";
import { DeviceTypesRepository } from "./repository";
import { CreateDeviceTypeInput } from "./schema";
import { DeviceTypeRequest } from "./types";

export class DeviceTypesService {
  static async create(data: CreateDeviceTypeInput) {
    const deviceType = await DeviceTypesRepository.findByName(data.name);

    if (deviceType) throw new Error("Tipo de dispositivo já cadastrado");

    return await DeviceTypesRepository.crate(data);
  }

  static async findByDeviceTypeId(id: number) {
    const deviceType = await DeviceTypesRepository.findById(id);

    if (!deviceType) throw new Error("Tipo de dispositivo não encontrado");

    return deviceType;
  }

  static async list(data: string) {
    const deviceTypes = await DeviceTypesRepository.findAll(data);

    if (!deviceTypes) throw new Error("Tipo de dispositivo não encontrado");

    return deviceTypes.map((entity) => transformDeviceType(entity));
  }
}
