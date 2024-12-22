import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'


export async function GET(req: NextRequest) {
    try {
        const berita = await prisma.berita.findMany()
        if (!berita) {
            console.log('berita tidak ada');

            return NextResponse.json({ data: 'ada salah' }, { status: 403 })

        } else {
            // console.log(`ini berita nya : ${berita}`);
           
            return NextResponse.json({ data: berita }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    } finally {
        prisma.$disconnect()
    }
}