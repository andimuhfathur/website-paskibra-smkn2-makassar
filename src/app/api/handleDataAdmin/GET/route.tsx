// "use server"
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../prisma/prisma"
import { auth } from "../../../../../auth";

export async function GET(req: NextRequest) {
    try {
        const session = await auth()
        const data = await prisma.user.findMany({
            where: {
                email: session?.user.email
            }
        })
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