import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import fs, { writeFileSync } from 'fs'
import { getToken } from 'next-auth/jwt'
import { createClient } from "@supabase/supabase-js";

import { prisma } from "../../prisma/prisma"
import { auth } from "../../../../../auth";


export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {

    // const token = await getToken({ req }) as Token || null
    
    // const buattoken = token?.sub

    // const userId = parseInt(buattoken, 10)

    try {
        const form = await req.formData()

        const session = await auth()

        if (!session || !session.user.id) {
            return NextResponse.json({pesan: "id user tidak valid"})
        }


        const judul = form.get('judul') as string
        const image = form.get('image') as File
        const isi = form.get('isi') as string

        if (!judul) {
            console.log('judul tidak terisi');
            return NextResponse.json({ pesan: 'judul tidak ada' })
        } else if (!image) {
            console.log('image tidak terisi');
            return NextResponse.json({ pesan: 'image tidak ada' })
        } else if (!isi) {
            console.log('tidak ada berita');
            return NextResponse.json({ pesan: 'isi tidak ada' })
        }

        // const cekUser = await prisma.user.findUnique({
        //     where: {id : userId}
        // })

        // if (!cekUser) {
        //     return NextResponse.json({ pesan: 'Pengguna tidak ditemukan' });
        // }

        // buat nama file
        const fileName = `${Date.now()}-${image.name}`
        // dimana file akan di simpan
        // const { data, error } = await sub.storage.from('uploadsNews').upload(fileName, image.stream(), {contentType: image.type})
        //         if (error) {
        //             throw new Error('sub gagal')

        //         }
        //         const fileUrl = data?.path
        const letak = path.join(process.cwd(), 'public/uploadsNews', fileName)
        const ubah = await image.arrayBuffer()

        writeFileSync(letak, Buffer.from(ubah))

        const berita = await prisma.berita.create({
            data: {
                judul: judul,
                image: `/uploadsNews/${fileName}`,
                isi_berita: isi,
                userId : session?.user.id
            },
        })

        if (!berita) {
            console.log('gagal');
            return NextResponse.json({ pesan: `data gagal ${berita}` }, { status: 400 })

        } else {
            
            console.log(berita);
            return NextResponse.json({ pesan: `data berhasil ${berita}` }, { status: 200 })
        }


    } catch (error) {
        console.error(error)
        return NextResponse.json({ pesan: error }, { status: 500 })
    } finally {
        prisma.$disconnect()
    }

}