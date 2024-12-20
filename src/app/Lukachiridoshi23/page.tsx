import Link from "next/link"
const Admin = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <h1 className="text-white transition-all hover:text-[#51ff51] text-[3rem] shadow-2xl font-semibold hover:drop-shadow-2xl hover:shadow-[#51ff51]">Assalamualaikum Selamat Datang Di Halaman Admin</h1>
            <div className="flex flex-row m-[4rem] gap-[10rem]">
            <Link href={'Lukachiridoshi23/Login'}><h1 className="text-white transition-all hover:text-[#51ff51] text-[1.5rem] shadow-2xl font-semibold">Login Bro</h1></Link>
            <Link href={'Lukachiridoshi23/Register'}><h1 className="text-white transition-all hover:text-[#51ff51] text-[1.5rem] shadow-2xl font-semibold">Regis Dulu Lah</h1></Link>
            </div>
        </div>
    )
}

export default Admin