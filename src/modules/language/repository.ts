import { LanguageCreateInput } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";

export class LanguageRepository {
    static async create(data: LanguageCreateInput){
        return await prisma.language.create({data});
    }

    static async list(){
        return await prisma.language.findMany();
    }

    static async findByCode(code:string){
        return await prisma.language.findFirst({where:{code}});
    }
}