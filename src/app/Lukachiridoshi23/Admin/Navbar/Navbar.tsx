import Link from "next/link"
import { auth, signOut } from "../../../../../auth"
const Navbar = async () => {
    const session = await auth()
    return (
        <div className="flex white ">

            <div className="block w-[500%] h-screen p-4 bg-black text-white ">
                <div className="text-[2rem]">Admin Stemzha</div>
                {/* <div className="flex w-[10rem] items-center justify-center h-[10rem]">
                    <Image src={imag} className="object-cover w-[10rem] h-[10rem] rounded-full" priority alt="kjfnk"/>
               </div> */}
                <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Admin'}>Home</Link></div>
                {session && (
                    <>
                        {session.user.role === "admin" ? (
                            <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Admin/UserPage'}>User</Link></div>
                        ): null}
                        <div className="p-1">Data File
                            <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Admin/Berita'}>Berita</Link></div>
                            <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Admin/ImagePost'}>Image</Link></div>
                            <div className="p-1"><Link href={'http://localhost:3000/Lukachiridoshi23/Admin/Anggota'}>Anggota</Link></div>
                        </div>
                        <div className="p-1">
                            <form action={async () => {
                                "use server"
                                await signOut({redirectTo: "/Lukachiridoshi23/Login"})
                            }}><button type="submit">Keluar</button></form>
                        </div>
                    </>
                )}
               
            </div>
            
        </div>
    )
}

export default Navbar