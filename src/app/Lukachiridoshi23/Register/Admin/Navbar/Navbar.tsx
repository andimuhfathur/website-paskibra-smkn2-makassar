import Link from "next/link"
const Navbar = () => {
    return (
        <div className="flex white ">

            <div className="block w-[500%] h-screen p-4 bg-black text-white ">
                <div className="text-[2rem]">Admin Stemzha</div>
                {/* <div className="flex w-[10rem] items-center justify-center h-[10rem]">
                    <Image src={imag} className="object-cover w-[10rem] h-[10rem] rounded-full" priority alt="kjfnk"/>
               </div> */}
                <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Register/Admin'}>Home</Link></div>
                <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Register/Admin/UserPage'}>User</Link></div>
                <div className="p-1">Data File
                    <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Register/Admin/Berita'}>Berita</Link></div>
                    <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Register/Admin/ImagePost'}>Image</Link></div>
                    <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Register/Admin/Anggota'}>Anggota</Link></div>
                </div>
                <div className="p-1"><Link href={'http://localhost:3000'}>Keluar</Link></div>
            </div>
            
        </div>
    )
}

export default Navbar