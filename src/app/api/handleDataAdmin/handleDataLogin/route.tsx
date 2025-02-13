import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";
import { signIn } from "next-auth/react";
import { schemaLoginCrendential } from "@/app/Kebu/zod";
import { AuthError } from "next-auth";
import { compareSync } from "bcrypt";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()
        const nameUser = formData.get('username') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        console.log({ nameUser, email, password });


        const validasiDat = await schemaLoginCrendential.safeParse({ nameUser, email, password })

        if (!validasiDat.success) {
            return NextResponse.json({ message: "validasi tidak berhasil" }, { status: 401 })
        }

        const datUser = validasiDat.data

        const user = await prisma.user.findUnique({
            where: {
                email: datUser?.email
            }
        })

        if (!user || !user.email || !user.password) {
            throw new Error("User Not Found")
        }

        const compe = await compareSync(datUser.password, user.password)

        if (!compe) return NextResponse.json({ message: "user tidak ada" }, { status: 403 })

        return NextResponse.json({ message: `user ada ${user.username}` }, { status: 202 })

    } catch (err) {
        console.log(`ini errror nya : ${err}`);
        return NextResponse.json({ message: `gagal` }, { status: 500 })
   }
}