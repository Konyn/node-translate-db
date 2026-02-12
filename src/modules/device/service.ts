import { transformDevice } from "../translate/transform/device";
import { DeviceRepository } from "./repository";
import { CreateDeviceInput } from "./schema";

export class DeviceService {
  static async create(data: CreateDeviceInput) {
    const exist = await DeviceRepository.findByName(data.name);
    if (exist) throw new Error("Nome já cadastrado");

    const newDevice = await DeviceRepository.create(data);

    return newDevice;
  }

  static async list() {
    const list = await DeviceRepository.findAll();
    if (!list) throw new Error("Nada encontrado");

    return list.map((entity) => transformDevice(entity));
  }

  static async deviceId(id: number) {
    const device = await DeviceRepository.findById(id);
    if (!device) throw new Error("Dispositivo não encontrado");

    return device;
  }
}
