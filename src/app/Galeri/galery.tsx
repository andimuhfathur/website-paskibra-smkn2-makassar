"use client"
import Image from "next/image"
import img3 from "../../../public/SAVE_20231120_095414.jpg"
import { useEffect, useState } from "react"
import style from "./gale.module.css"

const Gale = () => {
    const [data, setData] = useState<[]>([])
    const [datafoto, setdatafoto] = useState<any[]>([])
    const [idImage,setIdImage] = useState<string>("")
    // membuat variable
    const handleDownload = async (idDownload: string) => {
        console.log(`idDownload  = ${idDownload}`);

        const url = await fetch(`${process.env.NEXT_PUBLIC_API_GETIMAGE}/${idDownload}`, { cache: "no-store" })
        const res = await url.json()
        
        
        let imageURL = res.data.urlImage //membuat link variable
        let link = document.createElement('a') //membuat element link
        link.href = imageURL //mengisi link dengan alamat image
        link.download = res.data.judulImage // lalu membuat judul untuk image yang ingin kita download
        document.body.appendChild(link) //menampilkan link pada body
        link.click() //melakukan interaksi download
        document.body.removeChild(link) //menghapus link pada body
        //lalu image akan tersimpan ke dalam file 

        // handleGet  
    }

    const bacaId = async (idFoto: string) => {
        setIdImage(idFoto)

        const url = await fetch(`${process.env.NEXT_PUBLIC_API_GETIMAGE}/${idFoto}`, { cache: "no-store" })
        const res = await url.json()
        
        if (res?.data) {
            setdatafoto([res.data])
            
            document.addEventListener('click', function () {
                const po = document.getElementById('pop')
                if (po) {
                    po.style.display = 'block'
                }
            })
        } else {
            console.log("pop gagal");
            
        }
        

        
    }

    // const HandlePo = async (idSja: string) => {
    //     const url = await fetch(`/api/handleDataImage/GET/${idSja}`, { cache: "no-store" })
    //     const res = await url.json()
    //     console.log(res.data);
        
    // }


    useEffect(() => {
        const fetchData = async () => {
            const url = await fetch(`${process.env.NEXT_PUBLIC_API_GETIMAGE}`, { cache: "no-store" })
            const res = await url.json()
            setData(res.data)
        }
        fetchData()
    }, [])

    // pagination start

    const [hasil, setHasil] = useState([])
    const [page, setPage] = useState(1)
    const [meta, setMeta] = useState({ totalPage: 0 })
    
    const paginationFetch = async (page : number) => {
        const url = await fetch(`${process.env.NEXT_PUBLIC_API_PAGINATION}?page=${page}&limit=10`)
        const res = await url.json()
        if (!res) {
            console.log("res gagal");
            
        }
        setHasil(res.data)
        setMeta(res.meta)
        
    }

    useEffect(() => {
        paginationFetch(page)
    }, [page])

    const handlePrev = () => {
        if (page <= 1) {
            return
        }
        setPage(page - 1)
    }

    const handleNext = () => {
        if (page >= meta.totalPage) {
            return
        }
        setPage(page + 1)
    }


    return (
        <div className="h-auto">
            <div className="grid md:grid-cols-4 grid-cols-2 p-4 gap-2">
                {/* ini adalah gambar dan tombol button */}
                {hasil.map((datas : any) => {
                    return (
                        <div className={style.ima} id="openPopup" key={datas.id_image}>
                            <Image src={datas.urlImage} width={200} height={200} className=" w-[25rem] h-[25rem] object-cover" priority id="openPop" alt="fdfd" onClick={() => { bacaId(datas.id_image) }} />
                        </div>
                    )
                })}

                {/* ini adalah popup button */}
                {datafoto.length > 0 && (
                    <div className={style.popup} id="pop">
                        <div className={style.back} key={datafoto[0].id_image}>
                            <div className={style.contentPopup} id="con">
                                <div className="flex">
                                    <h1 className="w-[100rem] font-semibold">{datafoto[0].judulImage}</h1>
                                    <button className={style.btn1} id="keluar" onClick={() => {
                                        document.addEventListener('click', function () {
                                            const pu = document.getElementById('pop')
                                            if (pu) {
                                                pu.style.display = 'none'
                                            }
                                        })
                                        window.addEventListener('click', function (event) {
                                            if (event.target == this.document.getElementById('pop')) {
                                                const pi = this.document.getElementById('pop')
                                                if (pi) {
                                                    pi.style.display = 'none'
                                                }
                                            }
                                        })
                                    }}>Keluar</button>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Image src={datafoto[0].urlImage} width={200} height={200} className={style.imagePop} priority id="openPop" alt="fdfd" />
                                </div>
                                <div className="flex justify-end p-[1%]">
                                    {/* memanggil onClick dengan variable handleDownload */}
                                    <button className={style.btn2} id="download" onClick={() => { handleDownload(datafoto[0].id_image)}}>Download</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-center items-center p-4">
                <button className="p-2 border-2 bg-black text-white font-semibold text-[1rem]" onClick={handlePrev}>Kembali</button>

                <div className="p-2 font-semibold text-[1rem]">{page} of {meta.totalPage}</div>

                <button className="p-2 border-2 bg-black text-white font-semibold text-[1rem]" onClick={handleNext}>Selanjutnya</button>
            </div>
        </div>
    )
}

export default Gale