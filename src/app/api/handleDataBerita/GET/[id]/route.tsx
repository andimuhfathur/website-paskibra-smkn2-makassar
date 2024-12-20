import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest, context : {params : {id : string}}) => {
    const id = (Number(context.params.id) || 0)

    const berita = await prisma.berita.findUnique({
        where: {
            id_berita : id
        }
    })
    prisma.$disconnect()
    return NextResponse.json({data : berita}, {status: 200})
};

