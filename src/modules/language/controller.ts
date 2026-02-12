import { FastifyReply } from "fastify";
import { Api } from "@/helpers/api";
import { LanguageService } from "./service";
import { CreateLanguageRequest } from "./types";

export class LanguageController{
    static async create(req: CreateLanguageRequest,reply: FastifyReply){
        const {data,error} = await Api(() => LanguageService.create(req.body));

        if(error){
            return reply.status(400).send({ error: error.message });
        }

        return reply.status(201).send(data);
    }

    static async list(_:any,reply:FastifyReply){
        const {data,error} = await Api(() => LanguageService.list());

        if(error){
            return reply.status(400).send({ error: error.message });
        }

        return reply.status(201).send(data);
    }

}