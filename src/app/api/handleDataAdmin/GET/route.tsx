// "use server"
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../POST/prisma/prisma"
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, res : NextResponse) {
    try {
        const data = await prisma.user.findMany()
        console.log(data);

        if (!data) {
            console.log('gagal');

            return NextResponse.json({ data: 'data tidak ada' }, { status: 402 })
        }
        
        console.log("berhasil");

        return NextResponse.json({ data: data }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ data: 'data gagal' }, { status: 500 })
    } finally {
        prisma.$disconnect()
    }
}