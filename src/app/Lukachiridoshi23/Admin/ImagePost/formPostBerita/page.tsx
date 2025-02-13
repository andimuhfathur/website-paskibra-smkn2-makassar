"use client"
import React, { useState } from "react"
import style from "./style.module.css"
const HandlePostimage = () => {

    const [judul, setJudul] = useState<string>("")
    const[image,setImage] = useState<File | null>(null)

    const handleFormData = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = await new FormData()
        formData.append("judul", judul)
        if (image) {
            formData.append("image", image)
        }

        const apiPost = await fetch(`${process.env.NEXT_PUBLIC_API_POSTIMAGE}`, {
            method: 'POST', 
            body: formData
        })

        if (!apiPost) {
            console.log("api post gagal terhubung");
            
        } else {
            console.log("api post berhasil terhubung");

        }
    }

    const handlePopPost = () => {

        document.addEventListener("click", function () {
            const up = document.getElementById("popup")
            if (up) {
                up.style.display = "block"
            }
            
        })
        
    }

    const handleCancelPopPost = () => {
        document.addEventListener("click", function (){
            const upPop = document.getElementById("popup")
            if (upPop) {
                upPop.style.display = "none"
            }
})
    }
    return (
        <div className={style.hal1}>
            {/* membuat button */}
            <div className={style.button}>
            <button type="submit" className="w-[7rem] scale-75 h-auto p-3 bg-indigo-400 rounded-xl ml-[17rem] transition-all hover:scale-90 hover:shadow-xl" onClick={handlePopPost} >
                <h1 className="text-white font-semibold">Post Berita</h1>
            </button>
            </div>
            {/* membuat pop */}
            <div id="popup" className={style.popupAnimation}>
                <div className="flex items-center justify-center w-[78.9rem] h-screen bg-black bg-opacity-30 shadow-2xl">
                    <div className="w-[30rem] h-auto bg-white rounded-xl p-4">
                        <form method="post" >
                            <h1 className="font-semibold text-[1.3rem]">Berita Post</h1>
                            <label htmlFor="judulImage" className="font-semibold">Judul Image</label>
                            <br />
                            <input type="text" name="judulImage" id="judulImage" className="w-auto h-[2rem] border-2 border-black rounded-xl p-2" onChange={(e) => {setJudul(e.target.value)}} />
                            <br />
                            <label htmlFor="urlImage" className="font-semibold">Image</label>
                            <br />
                            <input type="file" name="urlImage" id="urlImage" className="w-auto h-[2rem] p-2 " onChange={(e) => {setImage(e.target.files? e.target.files[0] : null)}}/>
                            <br />
                            <button type="submit" className="w-[5rem]  h-[3rem] m-2 p-1 bg-indigo-400 rounded-xl hover:shadow-xl" onClick={handleFormData} >
                                <h1 className="text-white font-semibold">Post </h1>
                            </button>
                        </form>
                            <button type="submit" className="w-[5rem]  h-[3rem] m-2 p-1 bg-indigo-400 rounded-xl hover:shadow-xl" onClick={handleCancelPopPost}>
                                <h1 className="text-white font-semibold">Kembali</h1>
                            </button>
                        
                    </div>
                </div>
            </div>
    </div>
)
}

export default HandlePostimage