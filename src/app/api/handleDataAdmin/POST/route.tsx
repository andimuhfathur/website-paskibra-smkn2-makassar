// 'use server'
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs, { writeFileSync } from "fs";
import {prisma} from "../../prisma/prisma"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { z } from "zod"
import { redirect } from "next/navigation";
import { hashSync } from "bcrypt";


const schemaRegister = z.object({
    username: z.string().min(3, { message: "Karakter minimal 3 karakter" }),
    email: z.string().email().min(3, { message: "email anda kurang 3 karakter" }),
    password: z.string().min(6, { message: 'password anda kurang 6 karakter' }),
    image: z.instanceof(File).optional()
})

export async function POST(req: NextRequest) {
    try {
        // pengambilan data dari frontend
    const formData = await req.formData()
        const image = formData.get('image') as File
        const username = formData.get('username') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        if (!image) {
            console.log('image tidak ada');
            return NextResponse.json({ data: 'image mana bro' }, { status: 403 })
        } else if (!username) {
            console.log('username tidak ada');
            return NextResponse.json({ data: 'username mana bro' }, { status: 403 })
        }
        else if (!email) {
            console.log('email tidak ada');
            return NextResponse.json({ data: 'email mana bro' }, { status: 403 })
        } else if (!password) {
            console.log('password tidak ada');
            return NextResponse.json({ data: 'password mana bro' }, { status: 403 })
        }

        // validasi data

        const validasiDataAdmin = schemaRegister.safeParse({ username, email, password, image })

        const usernameAdmin = validasiDataAdmin.data?.username
        const imageAdmin = validasiDataAdmin.data?.image
        const emailAdmin = validasiDataAdmin.data?.username
        const passwordAdmin = validasiDataAdmin.data?.username
        
        
        
        if (!validasiDataAdmin.success) {
            return {
                error: validasiDataAdmin.error.flatten().fieldErrors,
                res : NextResponse.json({message: "sukses"}, {status: 200})
            }
        }

        const valid = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (valid) {
            return NextResponse.json({ message: "data sudah ada" }, { status: 402 })
        }

        const hashpas = hashSync(password, 10)

        const namaFile = `${Date.now()}-${image.name}`
        const LetakFile = path.join(process.cwd(), "public/uploadsAdmin", namaFile)
        const ubahBuf = await image.arrayBuffer()

        writeFileSync(LetakFile, Buffer.from(ubahBuf))

        const createAdmin = await prisma.user.create({
            data: {
                username: usernameAdmin,
                image: `/uploadsAdmin/${image.name}`,
                email: email,
                password: hashpas
            }
        })

        if (createAdmin) {
            return NextResponse.json({message: createAdmin}, {status: 202})
        }

        
    } catch (err) {
        console.log(`ini error nya ${err}`);
        
        return NextResponse.json({ message: 'gagal Upload' }, { status: 500 })

    } finally {
        prisma.$disconnect()
   }     
        }
    