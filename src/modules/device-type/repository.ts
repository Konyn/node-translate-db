import { prisma } from "@/lib/prisma";
import { CreateDeviceTypeInput } from "./schema";
import { getSystemLanguage } from "../translate/cache";

export class DeviceTypesRepository {
  static async crate(data: CreateDeviceTypeInput) {
    return await prisma.deviceType.create({ data });
  }
  static async findById(id: number) {
    return await prisma.deviceType.findFirst({ where: { id } });
  }
  static async findByName(name: string) {
    return await prisma.deviceType.findFirst({ where: { name } });
  }
  static async findAll(search?: string) {
    const languageId = await getSystemLanguage();
    const whereCondition = search?.length
      ? {
          translations: {
            some: {
              ...(languageId !== 1 && { languageId }),
              name: {
                contains: search,
              },
            },
          },
        }
      : {};
    return await prisma.deviceType.findMany({
      where: whereCondition,
      include: {
        devices: true,
        translations: {
          where: {
            languageId,
          },
        },
      },
    });
  }
}
