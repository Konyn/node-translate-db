import { Api } from "@/helpers/api";
import { SystemService } from "./service";
import { FastifyReply } from "fastify";
import { UpdateSystemLanguageRequest } from "./types";

export class SystemController {
  static async update(req: UpdateSystemLanguageRequest, reply: FastifyReply) {
    const { error } = await Api(() => SystemService.updateLanguage(req.body));
    console.log("error", error);

    if (error) {
      return reply.status(400).send({ error: error.message });
    }

    return reply.status(204).send();
  }

  static async list(_: any, reply: FastifyReply) {
    const { data, error } = await Api(() => SystemService.list());

    if (error) {
      return reply.status(400).send({ error: error.message });
    }

    return reply.status(200).send(data);
  }
}
