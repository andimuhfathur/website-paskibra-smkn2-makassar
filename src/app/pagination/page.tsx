"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import img from "../../../public/Capcut/IMG_20240817_231342.jpg"
import Link from "next/link"
import Footer from "../Home/foo"
const pagination = () => {
    const [result, setResult] = useState([])
    const [page, setPage] = useState(1)
    const [meta, setMeta] = useState({ totalPage: 0 })
    
    const fetchData = async (page: number) => {
        const url = await fetch(`${process.env.NEXT_PUBLIC_API_PAGINATION_NEWS}?page=${page}&limit=10`)
        const res = await url.json()
        setResult(res.data)
        setMeta(res.meta)
    }

    useEffect(() => {
        fetchData(page)
    }, [page])

    const kemabli = () => {
        if (page <= 1) {
            return
        }
        setPage(page - 1)
    }

    const selanjutnya = () => {
        if (page >= meta.totalPage) {
            return
        }
        setPage(page + 1)
    }
    return (
        <div className="">
            <div className="py-4 flex justify-center items-center"><h1 className="font-semibold text-[1.3rem]">News Paskibra</h1></div>
            <div className="flex justify-center items-center">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 p-4">
            {result.map((dat: any) => {
                return (
                    <div className="" key={dat.id_berita}>
                        <Link href={`/HalamanNews/${dat.id_berita}`}>
                            <div className="md:w-[17rem] w-[10rem] h-[12rem] bg-reto overflow-hidden">
                                <Image src={dat.image} width={200} height={200} className="absolute md:w-[17rem] w-[10rem] h-[12rem] object-cover" priority alt="dsf" />
                                <div className="relative md:w-[17rem] w-[10rem] h-[5rem] bg-reto bottom-[-8rem]"><h1 className=" font-semibold font-title text-white p-4">{dat.judul}</h1></div>
                            </div>
                        </Link>
                    </div>
                    
                
                )
            })}
            </div>
            </div>
            
            <div className="flex justify-center items-center">
                <button className="p-2 font-semibold text-[1.3rem]" onClick={kemabli}>Kembali</button>
                <div className="p-2 font-semibold text-[1.3rem]">{page} of {meta.totalPage}</div>
                <button className="p-2 font-semibold text-[1.3rem]" onClick={selanjutnya}>Selanjutnya</button>
            </div>
            <Footer/>
        </div>
        
    )
}

export default pagination