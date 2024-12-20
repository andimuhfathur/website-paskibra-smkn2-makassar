import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



export async function GET(req: NextRequest, context: { params: { id: string } }) {
    const id = (Number(context.params.id) || 0)
    
    const gambar = await prisma.image.findFirst({
        where: {
            id_image : id
        }
    })

    if (!gambar) {
        console.log(`data ada : ${gambar}`);
        return NextResponse.json({ data: "tidak ada data" }, { status: 401 })
    }
    return NextResponse.json({data : gambar}, {status: 200})
}