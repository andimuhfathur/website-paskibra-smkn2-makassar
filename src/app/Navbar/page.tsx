'use client';
import Link from "next/link"
import { useEffect } from "react"
import Image from "next/image";
import Image1 from "../../../public/about/images-removebg-preview.png"
import { usePathname } from "next/navigation";
import Cari from "./SearchTag";



const Navbar = () => {
    const pat = usePathname()

    const tidakAdaNavbar = ['/Lukachiridoshi23/Admin',
        '/Lukachiridoshi23/Login',
        '/Lukachiridoshi23/Register',
        '/Lukachiridoshi23/Admin/UserPage',
        '/Lukachiridoshi23/Admin/Berita',
        '/Lukachiridoshi23/Admin/ImagePost',
        '/Lukachiridoshi23/Admin/Anggota',
        '/Lukachiridoshi23/Admin/Berita/handleBerita',
        '/Lukachiridoshi23/Admin/Berita/updateNews',
        '/Lukachiridoshi23/Admin/Berita/fetchData',
        '/Lukachiridoshi23/Admin/ImagePost/formPostBerita',
        '/Lukachiridoshi23/Admin/ImagePost/handleGetBerita',
        '/Lukachiridoshi23/Admin/ImagePost/handlePutBerita',]
    return !tidakAdaNavbar.includes(pat) ?
        <div>
            <div className="flex items-center justify-between p-4 bg-coke text-reto  w-full h-[4rem] z-[9999]" id="Home">
                <div className="flex justify-center items-center">
                    <Image src={Image1} className="w-[3rem] h-[3rem] object-cover" priority alt="sfkfjs" />
                    <h2 className="font-title font-bold text-[1.3rem]">Paskibra SMKN 2 Makassar</h2>
                </div>
                <div className="burger-link" id="link">
                    <Link href={"/Home"} className="py-4 mx-4  font-bold text-[1rem] font-title hover:transition-all hover:text-[red]">Home</Link>
                    <Link href={"/Profile"} className="py-4 mx-4  font-bold text-[1rem] font-title hover:transition-all hover:text-[red]">Profil</Link>
                    <Link href={"/Galeri"} className="py-4 mx-4  font-bold text-[1rem] font-title hover:transition-all hover:text-[red]">Gallery</Link>
                    <Link href={"/Kontak"} className="py-4 mx-4  font-bold text-[1rem] font-title hover:transition-all hover:text-[red]">Kontak</Link>
                </div>

                <Cari />

                <div className="md:hidden flex">

                    <i className="burger-btn p-2  font-semibold" id="burger" onClick={() => {
                        const bur = document.querySelector('#link')
                        const ger = document.querySelector('#burger')

                        bur?.classList.toggle('active')


                        

                    }}>#</i>
                </div>

            </div>
        </div> : null
}

export default Navbar