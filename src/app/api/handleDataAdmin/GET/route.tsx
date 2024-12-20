"use server"
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../POST/prisma/prisma"
export async function GET(req: NextRequest, res : NextResponse) {
    const data = await prisma.user.findMany()
    console.log(data);

    if (!data) {
        console.log('gagal');

        return NextResponse.json({ data: 'data tidak ada' }, { status: 200 })
    }
    prisma.$disconnect()
    console.log("berhasil");

    return NextResponse.json({ data: data }, { status: 200 })

}