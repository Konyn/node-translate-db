import Fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { deviceRoutes } from "./modules/device/routes.js";
import { deviceTypeRoutes } from "./modules/device-type/routes.js";
import ScalarApiReference from "@scalar/fastify-api-reference";
import { fastifySwagger } from "@fastify/swagger";
import { systemRoutes } from "./modules/system/routes.js";
import { getSystemLanguage } from "./modules/translate/cache.js";

const fastify = Fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>();

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

fastify.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Projeto de tradução dos dados pelo DB",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

fastify.register(ScalarApiReference, {
  routePrefix: "/docs",
  configuration: {
    theme: "deepSpace",
  },
});

await getSystemLanguage();

fastify.get("/", async () => {
  return "Server running";
});

fastify.register(deviceRoutes, { prefix: "/api/v1" });
fastify.register(deviceTypeRoutes, { prefix: "/api/v1" });
fastify.register(systemRoutes, { prefix: "/api/v1" });

fastify.listen({ port: 9001, host: "0.0.0.0" }).then(() => {
  console.log("Server running: http://localhost:9001");
  console.log("Documentation: http://localhost:9001/docs");
});
