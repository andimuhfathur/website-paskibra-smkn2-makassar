// 'use server'
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs, { writeFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";
import { prisma } from "./prisma/prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const dynamic = 'force-dynamic'



export async function POST(req: NextRequest) {

    
    try {
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

        const fileName = `${Date.now()}-${image.name}`
        const tak = path.join(process.cwd(), 'public/uploadsAdmin', fileName)
        const uabh = await image.arrayBuffer()

        writeFileSync(tak, Buffer.from(uabh))
        const very = await prisma.user.findUnique({
            where: { email }
        })

        if (very) {
            console.log('email sudah terdaftar');
            return NextResponse.json({pesan : 'email sudah terdaftar'})
        }

        const hashEmail = await bcrypt.hash(email, 10)
        const hashPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                username: username,
                image: `/uploadsAdmin/${fileName}`,
                email: hashEmail,
                password: hashPassword
            }
        })
        

       await console.log('Register Berhasil');
        

       

        const bandingkanPassword = await bcrypt.compare(password, user.password)
        if (!bandingkanPassword) {
            return NextResponse.json({pesan : 'password tidak falid'}, {status: 401})
        }

       await console.log('perbandingan berhasil');
        

        // membuat token jwt
        const token = jwt.sign(
            { id: user.id, username: user.username, image: user.image, email: email, password: user.password },
            '9d1aS3cfL1k9U6mjR4oPq7Zt8v5WnXy!',
            {expiresIn: '1h'}
        )

       await console.log('jwt berhasil');
        
        
        const res = NextResponse.redirect('http://localhost:3000/Lukachiridoshi23/Register/Admin', {status: 302})
        res.cookies.set('token', token, { httpOnly: true, path: '/Admin' })
        
        await console.log('res berhasil');

        return res
        
        
    } catch (err) {
        console.log(err);
        
        return NextResponse.json({ data: 'gagal Upload' }, { status: 500 })

    } finally {
        prisma.$disconnect()
   }     
        }
    