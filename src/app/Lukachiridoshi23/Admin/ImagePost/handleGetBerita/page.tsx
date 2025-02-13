"use client"
import style from "./style.module.css"
import Image from "next/image"
import img from "../../../../../../../public/693c1a974bd627add5ae56d17964a2ff (1).jpg"
import { useEffect, useState } from "react"
const HandleGetBerita = () => {

    //hendle put

    const [idImage, setidImage] = useState<string>("")
    const [judul, setJudul] = useState<string>("")
    const [image, setImage] = useState<File | null>(null)


    const handlePopPut = async (id: string) => {

        setidImage(id)

        const url = await fetch(`${process.env.NEXT_PUBLIC_API_GETUSERIMA}/${id}`, { cache: "no-store" })
        const res = await url.json()
        console.log(res.data);


        document.addEventListener("click", function () {
            const up = document.getElementById("popUpdate")
            if (up) {
                up.style.display = "block"
            }

        })

    }

    const handlePutData = async () => {
        console.log(`id = ${idImage}`);

        const formData = new FormData()
        formData.append("id", idImage)
        formData.append("judul", judul)
        if (image) {
            formData.append("image", image)
        }
        const urlPut = await fetch(`${process.env.NEXT_PUBLIC_API_UPDATEIMAGE}`, {
            method: 'PUT',
            body: formData
        })
        const res = await urlPut.json()
        console.log(res);

    }

    const handleCancelPopPut = () => {
        document.addEventListener("click", function () {
            const upPop = document.getElementById("popUpdate")
            if (upPop) {
                upPop.style.display = "none"
            }
        })
    }

    // handle delete

    const [idDelete, setIdDelete] = useState<string>("")

    const handleDelete = async (id: string) => {

        setIdDelete(id)

        const url = await fetch(`${process.env.NEXT_PUBLIC_API_GETUSERIMA}/${id}`, { cache: "no-store" })
        const res = await url.json()
        console.log(res.data);
        document.addEventListener("click", function () {
            const po = document.getElementById("popDelete")
            if (po) {
                po.style.display = "block"
            }
        })
    }

    const handleDeleteDataImage = async () => {
        const formData = new FormData()
        formData.append("id", idDelete)

        const url = await fetch(`${process.env.NEXT_PUBLIC_API_DELETEIMAGE}`, {
            method: 'DELETE',
            body: formData
        })
    }

    const handleCancelDelete = () => {
        document.addEventListener("click", function () {
            const poDel = document.getElementById("popDelete")
            if (poDel) {
                poDel.style.display = "none"
            }
        })
    }

    // handle GET

    const [data, setData] = useState<[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const url = await fetch(`${process.env.NEXT_PUBLIC_API_GETUSERIMA}`, { cache: "no-store" })
            const res = await url.json()
            setData(res.data)
        }
        fetchData()
    }, [])


    return (
        <div className={style.botutap}>
            <div className={style.bodytable}>
                <table className="border-2 w-[60rem] border-black">
                    <thead className="bg-indigo-500 h-[3rem]">
                        <tr>
                            <th className="text-white">Judul Image</th>
                            <th className="text-white">Image</th>
                            <th className="text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((datas: any) => {
                            return (
                                <tr key={datas.id_image}>
                                    <td>{datas.judulImage}</td>
                                    <td><Image src={datas.urlImage} width={200} height={200} className="w-auto h-auto object-cover" alt="ddscs" priority /></td>
                                    <td>
                                        <button type="submit" className="p-2  bg-indigo-500 text-white font-semibold rounded-xl" onClick={() => { handlePopPut(datas.id_image) }}>Update</button>
                                        <button type="submit" className="p-2 ml-4 bg-indigo-500 text-white font-semibold rounded-xl" onClick={() => { handleDelete(datas.id_image) }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

            <div id="popUpdate" className={style.popupAnimation}>
                <div className="flex items-center justify-center w-[78.9rem] h-screen bg-black bg-opacity-30 shadow-2xl">
                    <div className="w-[30rem] h-auto bg-white rounded-xl p-4">
                        <form>
                            <h1 className="font-semibold text-[1.3rem]">Update Berita</h1>
                            <label htmlFor="judulImage" className="font-semibold">Judul Image</label>
                            <br />
                            <input type="text" name="judulImage" id="judulImage" className="w-auto h-[2rem] border-2 border-black rounded-xl p-2" onChange={(e) => { setJudul(e.target.value) }} />
                            <br />
                            <label htmlFor="urlImage" className="font-semibold">Image</label>
                            <br />
                            <input type="file" name="urlImage" id="urlImage" className="w-auto h-[2rem] border-2 border-black rounded-xl p-2" onChange={(e) => { setImage(e.target.files ? e.target.files[0] : null) }} />
                            <br />
                            <button type="submit" className="w-[5rem]  h-[3rem] m-2 p-1 bg-indigo-400 rounded-xl hover:shadow-xl" onClick={handlePutData}>
                                <h1 className="text-white font-semibold">Update</h1>
                            </button>
                            <button type="submit" className="w-[5rem]  h-[3rem] m-2 p-1 bg-indigo-400 rounded-xl hover:shadow-xl" onClick={handleCancelPopPut}>
                                <h1 className="text-white font-semibold">Kembali</h1>
                            </button>
                        </form>

                    </div>
                </div>
            </div>
            {/* delete */}
            <div id="popDelete" className={style.popDelete}>
                <div className="flex items-center justify-center w-[78.9rem] h-screen bg-black bg-opacity-30 shadow-2xl">
                    <div className="w-[30rem] h-auto bg-white rounded-xl p-4">
                        <h1 className="text-2xl font-semibold">Yakin menghapus konten ini</h1>
                        <button type="submit" className="w-[5rem]  h-[3rem] m-2 p-1 bg-indigo-400 rounded-xl hover:shadow-xl" onClick={handleDeleteDataImage} >
                            <h1 className="text-white font-semibold">Delete </h1>
                        </button>
                        <button type="submit" className="w-[5rem]  h-[3rem] m-2 p-1 bg-indigo-400 rounded-xl hover:shadow-xl">
                            <h1 className="text-white font-semibold" onClick={handleCancelDelete}>Kembali</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HandleGetBerita