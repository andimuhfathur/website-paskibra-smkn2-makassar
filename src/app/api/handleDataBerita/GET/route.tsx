import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import {prisma} from "../../prisma/prisma"




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
        console.error(error)
        return NextResponse.json({ data: error }, { status: 500 })
    } finally {
        prisma.$disconnect()
    }
}