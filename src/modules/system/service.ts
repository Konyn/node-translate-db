import { getSystemLanguage } from "../translate/cache";
import { SystemRepository } from "./repository";
import { UpdateSystemSchema } from "./schema";

export class SystemService {
  static async updateLanguage(data: UpdateSystemSchema) {
    const system = await SystemRepository.findByLanguageId(data.languageId);

    if (system) throw new Error("Linguagem já em uso");

    const update = await SystemRepository.updateLanguage(data);
    await getSystemLanguage(true);

    return update;
  }

  static async list() {
    const system = await SystemRepository.list();

    if (!system)
      throw new Error("Dados do sistema ainda não foram adicionados");

    return system;
  }
}
