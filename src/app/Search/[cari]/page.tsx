"use client"
import { useEffect } from "react"
import { useState } from "react"
import Image from "next/image"
import img from "../../../../public/Capcut/IMG_20240817_231342.jpg"
import style from "./style.module.css"
import Link from "next/link"

const Search = ({ params }: { params: { cari: string } }) => {
    const key = params.cari
    const dekode = decodeURI(key)
    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const url = await fetch(`${process.env.NEXT_PUBLIC_API_SEARCH_NEWS}?query=${encodeURIComponent(dekode)}`)
            const res = await url.json()
            setResult(res.data)
        }

        fetchData()
    }, [])

    return (

        <div className="">
            <div className="px-4 py-0 md:pt-0 pt-[3rem] font-semibold text-[1.5rem]">
                pencarian {dekode}</div>
            <div className="grid md:grid-cols-4 grid-cols-2 p-4 gap-2">
            {result.map((results: any) => {
                return (
                    <Link href={`/HalamanNews/${results.id_berita}`} key={results.id_berita}>
                    <div className="">
                            <div className=" bg-black md:w-[17rem] w-[11rem] h-[15rem] overflow-hidden" key={results.id_berita}>
                                <Image src={results.image} width={200} height={200} className="absolute md:w-[17rem] w-[11rem] h-[15rem] object-cover" priority alt="gfdb" />
                                <div className={style.bg_content}>
                                    <h1 className={style.content_judul}>{results.judul}</h1>
                                </div>
                            </div>
                    </div>
                    </Link>
                )
            })}
                        </div>


        </div>
    )
}

export default Search