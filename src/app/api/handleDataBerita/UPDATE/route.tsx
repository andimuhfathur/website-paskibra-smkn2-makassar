import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs, { writeFile, writeFileSync } from "fs"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'


export async function PUT(req: NextRequest) {
    console.log('berhasil terkirim');

    try {
        const formData = await req.formData()

        const id = await (Number(formData.get("id") as string) || 0)
        const judulBaru = await formData.get("judul") as string
        const imageBaru = await formData.get("image") as File
        const isiBaru = await formData.get("isi") as string


        if (!id) {
            console.log("id tidak ada");
            return NextResponse.json({ data: "id tidak ada" }, { status: 401 })
        } else if (!judulBaru) {
            console.log("id tidak ada");
            return NextResponse.json({ data: "judul tidak ada" }, { status: 401 })
        } else if (!imageBaru) {
            console.log("id tidak ada");
            return NextResponse.json({ data: "image tidak ada" }, { status: 401 })
        } else if (!isiBaru) {
            console.log("id tidak ada");
            return NextResponse.json({ data: "isi tidak ada" }, { status: 401 })
        }

        const nameImage = `${Date.now()}-${imageBaru.name}`
        const letakImage = path.join(process.cwd(), 'public/uploadsNews', nameImage)
        const ubahBuffer = await imageBaru.arrayBuffer()

        writeFileSync(letakImage, Buffer.from(ubahBuffer))

        const berita = await prisma.berita.update({
            where: {
                id_berita: id
            },
            data: {
                judul: judulBaru,
                image: `/uploadsNews/${nameImage}`,
                isi_berita: isiBaru
            }
        })
      
        console.log("data berhasil terupdate");

        return NextResponse.json({ data: "hello" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    } finally {
        prisma.$disconnect()
   }

}