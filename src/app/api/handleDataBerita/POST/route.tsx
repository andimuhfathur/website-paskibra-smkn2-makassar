import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import fs, { writeFileSync } from 'fs'
import {getToken} from 'next-auth/jwt'


const prisma = new PrismaClient()




interface Token {
    sub : string
}

export async function POST(req: NextRequest) {

    // const token = await getToken({ req }) as Token || null
    
    // const buattoken = token?.sub

    // const userId = parseInt(buattoken, 10)

    const form = await req.formData()

   
    const judul = form.get('judul') as string
    const image = form.get('image') as File
    const isi = form.get('isi') as string

    if (!judul) {
        console.log('judul tidak terisi');
        return NextResponse.json({pesan :'judul tidak ada'})
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
    const simpanFile = path.join(process.cwd(), 'public/uploadsNews', fileName)
    // image ubah jadi buffer
    const ubahbuffer = await image.arrayBuffer()

    writeFileSync(simpanFile, Buffer.from(ubahbuffer))

    const berita = await prisma.berita.create({
        data : {
            judul: judul,
            image: `/uploadsNews/${fileName}`,
            isi_berita: isi,
        }
    })

    if (!berita) {
        console.log('gagal');
        return NextResponse.json({ pesan: `data gagal ${berita}` }, { status: 400 })

    } else {
        prisma.$disconnect()
        console.log(berita);
        return NextResponse.json({pesan : `data berhasil ${berita}`}, {status: 200})
    }



}