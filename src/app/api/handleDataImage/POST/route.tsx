import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import { writeFileSync } from "fs";

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()

        const judulImage = formData.get("judul") as string
        const image = formData.get("image") as File

        if (!judulImage) {
            console.log("judul tidak terisi");
            return NextResponse.json({ data: "judul tidak ada" })
        } else if (!image) {
            console.log("image tidak terisi");
            return NextResponse.json({ data: "image tidak ada" })
        } else {
            console.log("data image aman");
        }

        const nameImage = `${Date.now()}-${image.name}`
        const letakImage = path.join(process.cwd(), 'public/uploadsImage', nameImage)
        const imageBuffer = await image.arrayBuffer()

        writeFileSync(letakImage, Buffer.from(imageBuffer))

        const gambar = await prisma.image.create({
            data: {
                judulImage: judulImage,
                urlImage: `/uploadsImage/${nameImage}`
            }
        })

        if (!gambar) {
            console.log("post Image gagal");
            return NextResponse.json({ data: "gagal" }, { status: 500 })
        } else {
            
            console.log("post Image berhasil");
            return NextResponse.json({ data: "berhasil" }, { status: 200 })
        }
    } catch (error) {
        console.error(error)
        return NextResponse.json({ data: error }, { status: 500 })
    } finally {
        prisma.$disconnect() 
    }
}