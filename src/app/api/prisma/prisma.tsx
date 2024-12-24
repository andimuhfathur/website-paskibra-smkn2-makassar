import { PrismaClient } from "@prisma/client";


const globalUntukprisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalUntukprisma.prisma || new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

if (process.env.NODE_ENV !== 'production') globalUntukprisma.prisma = prisma;