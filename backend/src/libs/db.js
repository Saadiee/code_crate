import { Prismaclient } from "../generated/prisma-client-js/index.js";

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || new Prismaclient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
