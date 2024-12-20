import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    const berita = await prisma.berita.findMany()
    if (!berita) {
        console.log('berita tidak ada');
        
        return NextResponse.json({ data: berita }, { status: 403 })

    } else {
        // console.log(`ini berita nya : ${berita}`);
        prisma.$disconnect()
        return NextResponse.json({data: berita}, {status: 200})
    }
}