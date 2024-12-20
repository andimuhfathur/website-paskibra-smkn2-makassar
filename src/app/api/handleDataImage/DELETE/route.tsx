import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



export async function DELETE(req: NextRequest) {
    const formData = await req.formData()
    const id = (Number(formData.get("id") as string) || 0)

    if (!id) {
        console.log("id tidak ada");
        return NextResponse.json({ data: "id tidak ada" }, { status: 401 })
    } else {
        console.log("id  ada");
    }

    const gambar = await prisma.image.delete({
        where: {
            id_image: id
        }
    })

    if (!gambar) {
        console.log("api delete gagal");
        return NextResponse.json({ data: "api delete gagal" }, { status: 401 })
    }
    console.log("api delete berhasil");
    return NextResponse.json({ data: "api terhubung" }, { status: 200 })
}