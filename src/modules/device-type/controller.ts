import { Api } from "@/helpers/api";
import { FastifyReply } from "fastify";
import { DeviceTypesService } from "./service";
import { CreateDeviceTypeRequest, DeviceTypeRequest } from "./types";

export class DeviceTypeController {
  static async create(req: CreateDeviceTypeRequest, reply: FastifyReply) {
    const { data, error } = await Api(() =>
      DeviceTypesService.create(req.body),
    );

    if (error) {
      return reply.status(400).send({ error: error.message });
    }

    return reply.status(201).send(data);
  }

  static async list(req: DeviceTypeRequest, reply: FastifyReply) {
    const { data, error } = await Api(() =>
      DeviceTypesService.list(req.query.name ?? ""),
    );

    if (error) {
      return reply.status(400).send({ error: error.message });
    }

    return reply.status(200).send(data);
  }
}
