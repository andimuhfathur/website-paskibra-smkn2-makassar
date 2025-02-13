'use client'
import Image from "next/image"
import IMG18 from "../../../public/mufid-majnun-La3MwNrgEDc-unsplash.jpg";
import { useEffect } from "react";
import Link from "next/link";

const Pengibaran = () => {
    return (
        <div>
            <div className="flex md:mt-0 mt-[20rem] items-center h-screen bg-slate-900 shadow-2xl gap-[10rem]">
                <Image src={IMG18} className=" object-cover absolute brightness-50 w-full h-screen" alt="bshkjfba" priority />
                <div className="relative flex flex-col w-full h-[30rem] p-4 justify-center">
                    <h1 className="text-[3rem] text-[white]">Pengibaran Paskibra SMKN 2 Makassar</h1>
                    <p className="p-4 text-[white] text-[1.5rem]">Daftarkan Dirikamu Segera</p>
                    <br />
                    <Link href="/Galeri" className="flex justify-center items-center h-auto border-2 w-[8rem] p-[0.8] bg-white rounded-3xl">
                     <button type="submit" className=" font-semibold ">Lihat Semua</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Pengibaran