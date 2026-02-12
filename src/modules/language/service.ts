import { LanguageRepository } from "./repository";
import { CreateLanguageInput } from "./schema";

export class LanguageService {
    static async create(data:CreateLanguageInput){
        const language = await LanguageRepository.findByCode(data.code);

        if(language) throw new Error("Linguagem já cadastrada")

        return await LanguageRepository.create(data);
    }

    static async list(){
        const languages = await LanguageRepository.list();

        if(!languages.length) throw new Error("Nenhuma linguagem cadastrada")

        return languages;

    }
}