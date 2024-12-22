import Image from "next/image";
import img from "../../../public/Paskibniee/8666693_search_icon.png"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



const Cari = () => {
    const [query, setQuery] = useState<string>('')
    const router = useRouter()

    const handleSearch = (e: any) => {
        e.preventDefault()
        router.push(`/Search/${query}`)
    }

    const handleKey = (f: React.KeyboardEvent) => {
        if (f.key === "Enter") {
            f.preventDefault()
            router.push(`/Search/${query}`)
        }
    }


    return (
        <div className="relative z-[9999]">
            <input className="bg-coked text-white md:w-auto w-[20rem] h-[2.3rem] p-3 rounded-xl outline-none 
            transition-all hover:border-2 hover:border-red-700 absolute md:right-0 md:bottom-[-0.5rem] right-[-0.5rem] bottom-[-4rem]"
                type="text" onChange={(e) => { setQuery(e.target.value) }} placeholder="Search" onKeyDown={handleKey}/>

            <button type="submit"><Image src={img} className=" w-[1rem] h-[1rem] object-cover relative 
            md:right-3 md:bottom-[-0.3rem] right-[-2] bottom-[-3.8rem]" priority alt="fds" onClick={handleSearch} /></button>
        </div>
    )
}

export default Cari

