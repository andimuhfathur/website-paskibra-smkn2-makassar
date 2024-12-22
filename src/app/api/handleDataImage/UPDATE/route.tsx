import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import { writeFileSync } from "fs";

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'


export async function PUT(req: NextRequest) {
    try {
        const formData = await req.formData()
        const id = (Number(formData.get("id") as string) || 0)
        const tes = 123
        const judulBaru = formData.get("judul") as string
        const imageBaru = formData.get("image") as File

        if (!id) {
            console.log("tidak ada id");
            return NextResponse.json({ data: "tidak ada id" }, { status: 401 })

        } else if (!judulBaru) {
            console.log("tidak ada judul");
            return NextResponse.json({ data: "tidak ada judul" }, { status: 401 })

        } else if (!imageBaru) {
            console.log("tidak ada judul");
            return NextResponse.json({ data: "tidak ada judul" }, { status: 401 })

        } else {
            console.log("semua data image aman");

        }


        const namaImage = `${Date.now()}-${imageBaru.name}`
        const letakFile = path.join(process.cwd(), 'public/uploadsImage', namaImage)
        const imageBuffer = await imageBaru.arrayBuffer()

        writeFileSync(letakFile, Buffer.from(imageBuffer))

        const gambar = await prisma.image.update({
            where: {
                id_image: id
            },
            data: {
                judulImage: judulBaru,
                urlImage: `/uploadsImage/${namaImage}`
            }
        })

        if (!gambar) {
            console.log("update image gagal");
            return NextResponse.json({ data: "api image gagal" }, { status: 500 })

        } else {
           
            console.log("update image berhasil");
            return NextResponse.json({ data: "aman" }, { status: 200 })

        }


    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    } finally {
        prisma.$disconnect()  
   }
}