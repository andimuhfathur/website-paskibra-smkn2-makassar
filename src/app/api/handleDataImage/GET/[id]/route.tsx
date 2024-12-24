import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../prisma/prisma"


export async function GET(req: NextRequest, context: { params: { id: string } }) {
    try {
        const id = (Number(context.params.id) || 0)

        const gambar = await prisma.image.findFirst({
            where: {
                id_image: id
            }
        })

        if (!gambar) {
            console.log(`data ada : ${gambar}`);
            return NextResponse.json({ data: "tidak ada data" }, { status: 401 })
        }
       
        return NextResponse.json({ data: gambar }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ data: error }, { status: 500 })
    } finally {
        prisma.$disconnect()
    }
}