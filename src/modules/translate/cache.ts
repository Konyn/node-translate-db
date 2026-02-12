import { prisma } from "@/lib/prisma";

let systemLanguageCache: number | null = null;

export const getSystemLanguage = async (reload = false) => {
  if (reload) systemLanguageCache = null;

  if (systemLanguageCache !== null) return systemLanguageCache;

  const system = await prisma.system.findFirst({ where: { id: 1 } });
  systemLanguageCache = system?.languageId || 1;

  return systemLanguageCache;
};
