"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "../Navbar/Navbar"
import imgg from "../../../../../../public/050320800_1693834128-Timnas_Indonesia_-_Rafael_Struick__Marselino_Ferdinan_copy.webp"
const UserPage = () => {
    const [user, setuser] = useState<[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const url = await fetch(`${process.env.NEXT_PUBLIC_API_GETADMIN}`, { cache: "no-store" })
            const res = await url.json()
            setuser(res.data)
        }
        fetchData()
    }, [])
    return (
        <div className="flex w-full h-auto">
            <Navbar />
            {user.map((dataUser: any) => {
                return (
                    <div className="w-[75%] p-4">
                        <h1 className="text-[2rem]">Hello Admin {dataUser.username}</h1>
                        <div className="">
                            <Image src={imgg} className="w-[10rem] h-[10rem] object-cover rounded-full" priority alt="dfsfs" />
                            <h1 className="">Username</h1>


                        </div>
                    </div>
                )
            })}
            
        </div>

    )
}

export default UserPage