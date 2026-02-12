import { FastifyReply} from "fastify";
import { ICreateDevice } from "./types";
import { createDeviceSchema } from "./schema";
import { DeviceService } from "./service";
import { Api } from "@/helpers/api";

export class DeviceController {
  static async create(req: ICreateDevice, reply: FastifyReply) {
    const parse = createDeviceSchema.safeParse(req.body);
    if (!parse.success) {
      return reply.status(400).send("Erro");
    }
    const body = req.body;
    const { data, error } = await Api(() => DeviceService.create(body));

    if (error) {
      return reply.status(400).send({ error: error.message });
    }

    return reply.status(201).send(data);
  }

  static async list(_: any, reply: FastifyReply) {
    const { data, error } = await Api(() => DeviceService.list());

    if (error) {
      return reply.status(400).send({ error: error.message });
    }

    return reply.status(200).send(data);
  }

  static async device(req: any, reply: FastifyReply) {
    const { data, error } = await Api(() =>
      DeviceService.deviceId(Number(req.params.id)),
    );

    if (error) {
      return reply.status(400).send({ error: error.message });
    }

    return reply.status(200).send(data);
  }
}
