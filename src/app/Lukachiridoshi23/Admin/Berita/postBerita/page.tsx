'use client'
import { useEffect, useState } from "react"
import React from "react"
import { useRouter } from "next/router"
import { signIn } from "../../../../../../auth"
const Berita = () => {

    const [judul, setJudul] = useState<string>('')
    const [image, setimage] = useState<File | null>(null)
    const [isi, setisi] = useState<string>('')

    const handleSubmitBerita = async (e: React.FormEvent) => {
        // const router = useRouter()

        e.preventDefault()


        const Form = await new FormData()
        Form.append('judul', judul)
        if (image) {
            Form.append('image', image)
        }
        Form.append('isi', isi)

        const respone = await fetch(`${process.env.NEXT_PUBLIC_API_POSTBERITA}`, {
            method: 'POST',
            body: Form
        })

        if (!respone.ok) {
            console.log('Post berita gagal')
        } else {
            // router.reload()
            console.log('Post berita berhasil');
        }

    }



    return (
        <div className="flex">

            <div className="p-4">
                <h1 className=" text-[2rem]">Berita Page</h1>
                <div className="">
                    <form onSubmit={handleSubmitBerita} action="Berita" method="POST" encType="multipart/form-data">
                        <label htmlFor="judul">Judul Berita</label>
                        <br />
                        <input required type="text" name="judul" id="judul" onChange={(e) => { setJudul(e.target.value) }} />
                        <br />
                        <label htmlFor="image">image Berita</label>
                        <br />
                        <input required type="file" name="image" id="image" onChange={(e) => { setimage(e.target.files ? e.target.files[0] : null) }} />
                        <br />
                        <label htmlFor="isi">isi Berita</label>
                        <br />
                        <input required type="text" name="isi" id="isi" onChange={(e) => { setisi(e.target.value) }} />
                        <br />
                        <button type="submit">Upload Berita</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Berita