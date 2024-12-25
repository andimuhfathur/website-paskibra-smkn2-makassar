'use client'
import { useState } from "react"
import React from "react"
import style from "./style.module.css"
const updateNews = () => {
    const [judul, setjudul] = useState<string>('')
    const [image, setimage] = useState<File | null>(null)
    const [isi, setisi] = useState<string>('')

    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formData = await new FormData()
        formData.append('judul', judul)
        if (image) {
            formData.append('image', image)
        }
        formData.append('isi', isi)

        const respon = await fetch(`${process.env.NEXT_PUBLIC_API_GET}`, {
            method: 'PUT',
            body: formData
        })

        if (!respon.ok) {
            console.log('update gagal');
        } else {
            console.log('update berhasil');
            
        }
    }
    return (
        <div className="flex justify-center items-center h-screen bg-slate-800 bg-opacity-25">
                <div className={style.animationPop}>
                <div className="w-[30rem] h-auto p-4 bg-white shadow-2xl rounded-md">
                    <h1 className="text-[1.5rem] font-semibold">Update News</h1>
                    
                    <form onSubmit={handleUpdateSubmit} action="updateNews" method="post">
                        <label className="font-semibold">Update Judul</label>
                        <br />
                        <input type="text" name="judul" id="judul" className="border-2 border-black w-auto h-[3rem] rounded-2xl p-2" onChange={(e) => { setjudul(e.target.value) }} />
                        <br />
                        <label className="font-semibold">Update Image</label>
                        <br />
                        <input type="file" name="image" id="image" className="" onChange={(e) => { setimage(e.target.files ? e.target.files[0] : null) }} />
                        <br />
                        <label className="font-semibold">Update Isi</label>
                        <br />
                        <input type="text" name="isi" id="isi" className="border-2 border-black w-auto h-[3rem] rounded-2xl p-2" onChange={(e) => { setisi(e.target.value) }} />
                        <br />
                        <button type="submit" className="mt-[1rem] bg-purple-400 p-2 rounded-2xl transition-all hover:border-2 hover:border-violet-800">Update News</button>
                    </form>
                </div>
        </div>
            </div>
        
    )
}


export default updateNews