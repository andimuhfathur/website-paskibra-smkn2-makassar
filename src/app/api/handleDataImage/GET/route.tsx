import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import { prisma } from "../../prisma/prisma"

export async function GET(req: NextRequest) {
    console.log("api GET image terhubung");

    try {
        const gamabar = await prisma.image.findMany()

        if (!gamabar) {
            console.log("data tidak ada");
            return NextResponse.json({ data: "data image tidak ada" }, { status: 401 })
        } else {
            
            console.log("data ada");
            return NextResponse.json({ data: gamabar }, { status: 200 })
        }
    } catch (error) {
        console.error(error)
        return NextResponse.json({ data: error }, { status: 500 })
    } finally {
        prisma.$disconnect()
  }
}