import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import { prisma } from "../prisma/prisma"


export const dynamic ='force-dynamic'

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url)
        const page = parseInt(searchParams.get("page") || '1', 10)
        const limit = parseInt(searchParams.get("limit") || '10', 12)

        if (page < 1 || limit < 1) {
            return NextResponse.json({data : 'data pagination salah'}, {status: 200})
        }

        const langkahi = (page - 1) * limit

        const [data, total] = await Promise.all([
            prisma.berita.findMany({
                skip : langkahi,
                take: limit,
                orderBy: { tanggalUpload: 'desc' },
            }),
            prisma.berita.count()
        ])

        const totalPage = Math.ceil(total / limit)


        return NextResponse.json({
            data: data,
            meta: {
                page,
                limit,
                total,
                totalPage
            }
        })
    } catch (error) {
        console.error(`ini adalah error nya ${error}`)
        return NextResponse.json({data : 'pagination news gagal'}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}