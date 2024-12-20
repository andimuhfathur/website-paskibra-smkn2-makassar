'use client'
import Image from "next/image";
import istagram from "../../../public/1384031.png";
import facebook from "../../../public/facebook_icon_137647.webp";
import tik from "../../../public/1946552.png";
import youtube from "../../../public/152810.png";
import Peta from "./peta";
const Footer = () => {
    return (
        <div className="flex flex-col md:mt-[0rem] mt-[1rem]">

            <div className="flex flex-wrap justify-center md:h-[18rem] h-[50rem] bg-zinc-900 p-4 gap-4">

                <div className="w-[24rem] h-[14rem]">
                    <p className="text-[2rem] text-[white]">Follow</p>
                    <div className="flex justify-center items-center w-[2.5rem] transition-all hover:w-[20rem] hover:justify-normal hover:p-1 after:content-[''] hover:after:content-['Istagram'] hover:after:p-4 h-[2.5rem] hover:after:text-[1.5rem] hover:after:text-[white] bg-gradient-three-colors  rounded-lg m-2">
                    <Image src={istagram} className="w-[2rem] h-[2rem]" alt="blvkjdfsjn" priority />
                    </div>
                    <div className="flex justify-center items-center w-[2.5rem] transition-all hover:w-[20rem] hover:justify-normal hover:p-1 after:content-[''] hover:after:content-['Facebook'] hover:after:p-4 h-[2.5rem] hover:after:text-[1.5rem] hover:after:text-[white] bg-blue-600 rounded-lg m-2">
                    <Image src={facebook} className="w-[2rem] h-[2rem]" alt="blvkjdfsjn" priority />
                    </div>
                    <div className="flex justify-center items-center w-[2.5rem] transition-all hover:w-[20rem] hover:justify-normal hover:p-1 after:content-[''] hover:after:content-['TikTok'] hover:after:p-4 h-[2.5rem] hover:after:text-[1.5rem] hover:after:text-[white] bg-green-700 rounded-lg m-2">
                    <Image src={tik} className="w-[2rem] h-[2rem]" alt="blvkjdfsjn" priority />
                    </div>
                    <div className="flex justify-center items-center w-[2.5rem] transition-all hover:w-[20rem] hover:justify-normal hover:p-1 after:content-[''] hover:after:content-['Youtube'] hover:after:p-4 h-[2.5rem] hover:after:text-[1.5rem] hover:after:text-[white] bg-red-700 rounded-lg m-2">
                    <Image src={youtube} className="w-[2rem] h-[2rem]" alt="blvkjdfsjn" priority />
                    </div>
                    </div>
                <div className="w-[24rem] h-[14rem]">
                    
                        <p className="text-[2rem] text-[white]">Lokasi</p>

                    {/* <Maps /> */}
                    <Peta />
                    
                    </div>
                <div className="w-[24rem] h-[14rem] font-normal">
                    <p className="text-[2rem] text-[white] font-semibold">kontak</p>
                    <p className="text-[1.5rem] text-[white]">Pakibra SMKN 2 Makassar</p>
                    <p className=" text-[white]">Jl.Pancasila No.15</p>
                    <p className=" text-[white]">Website : paskibra SMKN 2 Makassar.id</p>
                    <p className=" text-[white]">No.Hp: +62-821-9220-1980</p>
                <p className=" text-[white]">Saya bukan Paskib</p>
                
                    </div>
            </div>

            <div className="flex justify-between items-center w-full h-[6rem] bg-zinc-800 p-4">
                <div className="">
                    <h1 className=" font-normal text-[white]">Copyright © 2022-2024 Paskibra SMKN 2 Makassar. Developed by Sekretariat Paskibra SMKN 2 Makassar. All rights reserved.</h1>
                </div>

                <div className="text-white">
                <a href="#Home">Kembali</a>
                </div>

            </div>

               

            

               

            </div>


    )
}

export default Footer