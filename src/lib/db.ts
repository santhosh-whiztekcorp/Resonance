import { PrismaPg } from "@prisma/adapter-pg"
import "dotenv/config"

import { PrismaClient } from "../generated/prisma/client"
import { env } from "./env"

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL })
const globalForPrisma = global as unknown as { db: PrismaClient }

const db = globalForPrisma.db || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db

export { db }
