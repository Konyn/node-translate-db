import { prisma } from "@/lib/prisma";
import { UpdateSystemSchema } from "./schema";

export class SystemRepository {
  static async list() {
    return await prisma.system.findMany();
  }
  static async findByLanguageId(languageId: number) {
    return await prisma.system.findFirst({ where: { languageId } });
  }
  static async updateLanguage(data: UpdateSystemSchema) {
    return await prisma.system.update({
      where: {
        id: data.id,
      },
      data: {
        languageId: data.languageId,
      },
    });
  }
}
