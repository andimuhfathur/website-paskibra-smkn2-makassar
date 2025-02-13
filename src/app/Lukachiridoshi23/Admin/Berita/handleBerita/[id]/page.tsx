'use client'
import Image from "next/image"
import React, { useEffect, useState } from "react"
import style from "../style.module.css"
const url = 'http://localhost:3000/api/handleDataBerita/GET'
const urlUpdateData = `http://localhost:3000/api/handleDataBerita/GET/`

// interface propt {
//     userId : number
// }
const NewsPost = ({params} : {params? : {id : string}}) => {
    // handle update news
    // const idNews = params?.id || ""
    const [idNews, setIdNews] = useState<string>("")
    const [judul, setjudul] = useState<string>('')
    const [image, setimage] = useState<File | null>(null)
    const [isi, setisi] = useState<string>('')
    
    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        console.log(`id adalah ${idNews}`);
        

        const formData = await new FormData()
        formData.append('judul', judul)
        if (image) {
            formData.append('image', image)
        }
        formData.append('isi', isi)
        formData.append('id', idNews)

        // console.log({ idNews, judul, image, isi});
        

        const respon = await fetch(`${process.env.NEXT_PUBLIC_API_UPDATE}`, {
            method: 'PUT',
            body: formData
        })

        if (!respon.ok) {
            console.log('update gagal');
        } else {
            console.log('update berhasil');

        }
    }
    
    // handle get data
    const [data, setdata] = useState<[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const respone = await fetch(`${process.env.NEXT_PUBLIC_API_GETDATBET}`, { cache: "no-store" })
            const beritas = await respone.json()
           setdata(beritas.data)
        }
        fetchData()
    }, [])

    const handleUpdateData = async (id_berita: string) => {

        setIdNews(id_berita)
        
        const getData = await fetch(`${process.env.NEXT_PUBLIC_API_GETDATBET}/${id_berita}`, { cache: "no-store" })
        const res = await getData.json()

        setjudul(res.data.judul)
        setimage(res.data.image ? new File([res.data.image], "image") : null)
        setisi(res.data.isi_berita)
        
        document.addEventListener('click', function () {
            const popup = document.getElementById('forupdate')
            if (popup) {
                popup.style.display = 'block'
            }
        })
    }
    
    const handleCancel = () => {
        
        document.addEventListener('click', function () {
            const popup = document.getElementById('forupdate')
            if (popup) {
                popup.style.display = 'none'
            }
        })
    }



    // handle DELETE
//untuk delete
    const handleDelete = async (e : React.FormEvent) => {
        e.preventDefault()

        const formData = await new FormData()
        formData.append("id", idNews)

        const hubungkan = await fetch(`${process.env.NEXT_PUBLIC_API_DELETE}`, {
            method: "DELETE",
            body: formData
        })
        const res = await hubungkan.json()

        if (!res) {
            console.log("api delete gagal terhubung");
            
        } else {
            console.log("api delete berhasil terhubung");

        }
    }

    //untuk ambil id nya
    const handleGetDelete = async (id: string) => {

        setIdNews(id)

        console.log(`ini adalah ${id}`);

        const getData = await fetch(`${process.env.NEXT_PUBLIC_API_GETDATBET}/${id}`, { cache: "no-store" })
        const res = await getData.json()
        

        document.addEventListener('click', function () {
            const formDelete = document.getElementById("formDelete")
            if (formDelete) {
                formDelete.style.display = 'block'
            }
        })

    }

    const handleCancelDelete = () => {
        document.addEventListener("click", function () {
            const formDelete = document.getElementById("formDelete")
            if (formDelete) {
                formDelete.style.display = 'none'
            }
        })
    }





    // handleget data update

//     useEffect(() => {
//         getData()
//     }, [])

//     const getData = async () => {
//         const fetchDataNews = await fetch('/api/handleDataBerita/GET/' + idNews)
//         const res = await fetchDataNews.json()
//         console.log(res.data.id_berita);
        

//         setjudul(res.data.judul)
//         setimage(res.data.image ? new File([res.data.image], "image") : null)
//         setisi(res.data.isi_berita)
        
// }

//     useEffect(() => {
//  getData()
//     }, [])

//     const getData = async () => {
//         const res = await fetch('/api/handleDataBerita/GET/' + idNews, { cache: "no-store" })
//         const json = await res.json()
//         console.log(json);
        
//     }

    

   if(!data) return <div>Loading</div>

    return (
        <div>
            <div className="block p-4 absolute">
                <h1 className="text-2xl">Berita Post</h1>
                <div className={style.scrollbar}>
                    <table className="w-[59rem] border-2 border-black">
                       <thead>
                        <tr>
                            <th>judul</th>
                            <th>image</th>
                                <th>isi</th>
                                <th>action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {data.map((berita : any) => {
                        return (
                           <tr key={berita.id_berita} className="">
                                <td className="p-4">{berita.judul}</td>
                                <td className="p-4"><Image src={berita.image} width={300} height={300} className="w-auto h-auto object-cover" priority alt="fdv" /></td>
                                <td className="p-4">{berita.isi_berita}</td>
                                <td><button type="submit" onClick={() => {handleGetDelete(berita.id_berita)}}>Delete</button>
                                    <button type="submit" name="update" id="update" key={berita.id_berita} onClick={() => { handleUpdateData (berita.id_berita)}}>Update</button></td>
                            </tr>
                        )
                    })}  
                        </tbody>
                    </table>
                    
                </div>
            </div>
            <div className={style.animationPop} id="forupdate">
                <div className="flex justify-center items-center w-[207%] h-screen bg-slate-800 bg-opacity-25">
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
                            <button type="submit" className="mt-[1rem] bg-purple-400 p-2 rounded-2xl transition-all hover:border-2 hover:border-violet-800" onClick={handleCancel}>Cancel</button>

                        </form>
                    </div>
                </div>
            </div>
            <div className={style.animationPop} id="formDelete">
                <div className="flex justify-center items-center w-[207%] h-screen bg-slate-800 bg-opacity-25">
                    <div className="w-[30rem] h-auto p-4 bg-white shadow-2xl rounded-md">
                        <h1 className="text-[1.5rem] font-semibold">Yakib Ingin menghapus data ini</h1>
                        <button type="submit" className="mt-[1rem] bg-purple-400 p-2 rounded-2xl transition-all hover:border-2 hover:border-violet-800" onClick={handleCancelDelete}>cancel</button>
                        <button type="submit" className="mt-[1rem] bg-purple-400 p-2 rounded-2xl transition-all hover:border-2 hover:border-violet-800" onClick={handleDelete}>delete</button>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NewsPost