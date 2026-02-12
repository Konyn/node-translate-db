import { prisma } from "@/lib/prisma";
import { CreateDeviceInput } from "./schema";
import { getSystemLanguage } from "../translate/cache";

export class DeviceRepository {
  static async create(data: CreateDeviceInput) {
    return await prisma.device.create({ data });
  }
  static async findAll() {
    const languageId = await getSystemLanguage();
    const whereCondition =
      languageId === 1
        ? {} // pt-BR: sem filtro, traz tudo
        : {
            // outros idiomas: filtra por tradução
            deviceType: {
              translations: {
                some: { languageId },
              },
            },
          };
    return await prisma.device.findMany({
      where: whereCondition,
      orderBy: { id: "asc" },
      include: {
        deviceType: {
          include: {
            translations: {
              where: { languageId },
            },
          },
        },
        sector: true,
      },
    });
  }
  static async findByName(name: string) {
    return await prisma.device.findFirst({ where: { name } });
  }
  static async findById(id: number) {
    return await prisma.device.findFirst({
      where: { id },
      include: { deviceType: true },
    });
  }
}
