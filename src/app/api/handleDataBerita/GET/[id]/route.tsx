import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic'


export const GET = async (req: NextRequest, context : {params : {id : string}}) => {
    try {
        const id = (Number(context.params.id) || 0)

        const berita = await prisma.berita.findUnique({
            where: {
                id_berita: id
            }
        })
        
        return NextResponse.json({ data: berita }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ data: error }, { status: 500 })
    } finally {
        prisma.$disconnect()
    }
};

