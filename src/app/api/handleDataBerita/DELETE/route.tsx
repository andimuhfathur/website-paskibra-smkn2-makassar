import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../prisma/prisma"
import { auth } from "../../../../../auth";


export async function DELETE(req: NextRequest) {
    console.log("api delete terhubung");

    try {
        const formData = await req.formData()

        const id = await (Number(formData.get("id") as string) || 0)

        if (!id) {
            console.log("id delete tidak ada");
            return NextResponse.json({ data: "id tidak ada" }, { status: 401 })
        }

        const berita = await prisma.berita.delete({
            where: {
                id_berita: id,
            }
        })

        if (!berita) {
            console.log("delete gagal");
            return NextResponse.json({ data: "gagal" }, { status: 402 })
        }

        console.log("delete berhasil");
        return NextResponse.json({ data: "berhasil" }, { status: 200 })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ data: error }, { status: 500 })
    } finally {
        prisma.$disconnect()
    }
}