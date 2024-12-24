// "use server"
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import {prisma} from "../../prisma/prisma"

export async function GET(req: NextRequest) {
    try {
        const data = await prisma.user.findMany()
        console.log(data);

        if (data.length === 0) {
            console.log('gagal');

            return NextResponse.json({ data: 'data tidak ada' }, { status: 402 })
        }
        
        console.log("berhasil");

        return NextResponse.json({ data: data }, { status: 200 })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ data: 'data gagal' }, { status: 500 })
    } finally {
        prisma.$disconnect()
    }
}