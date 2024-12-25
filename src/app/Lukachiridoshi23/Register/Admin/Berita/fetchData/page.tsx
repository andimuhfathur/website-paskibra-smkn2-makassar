"use client"
const url = 'http://localhost:3000/api/handleDataBerita/GET'
import React from "react"
import { useEffect, useState } from "react"
import NewsPost from "../handleBerita/[id]/page"

const Data = () => {
    const [post, setpost] = useState<[]>([])

    useEffect(() => {
        const fetcdata = async () => {
            const fetchdata = await fetch(`${process.env.NEXT_PUBLIC_API_GET}`, { cache: 'no-store' })
            const res = await fetchdata.json()
            setpost(res.data)
        }
        fetcdata()
    }, [])

    if (!post) return <div>Loading...</div>


    return (
        <div className="">
            hello
            {post.map((berita: any) => {
                return (
                    <div className="" key={berita.id_berita}>
                        {berita.judul}
                    </div>
                )
            })}
        </div>
    )
}

export default Data