import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const page = parseInt(searchParams.get('page') || '1', 10)
        const limit = parseInt(searchParams.get('limit') || '10', 12    )

        if (page < 1 || limit < 1) {
            return NextResponse.json({ data: "data salah" }, { status: 200 })
        }

        const skip = (page - 1) * limit

        const [posts, total] = await Promise.all([
            prisma.image.findMany({
                skip,
                take: limit,
                orderBy: { tanggalUploadImage: 'desc' },
            }),
            prisma.image.count()
        ])

        const totalPage = Math.ceil(total / limit)

        return NextResponse.json({
            data: posts,
            meta: {
                page,
                limit,
                total,
                totalPage
            }
        })
    } catch (error) {
        console.error(`ini adalah error nya ${error}`)
        return NextResponse.json({data : "pagination gagal"}, {status: 200})
    }
}