import Image from "next/image"
import IMG12 from "../../../public/students.png";
import IMG13 from "../../../public/sex.png";
import IMG14 from "../../../public/band.png";
import IMG15 from "../../../public/group.png";
const Statik = () => {

    const data = {
        anggota: '100',
        alumni: '50',
        prestasi: '10',
        ada: '6'
    }

    return (
        <div className="md:mt-[5rem] mt-[5rem] h-screen">
            <h1 className="flex mt-[5rem] font-semibold text-[2rem] justify-center">Statik Paskibra</h1>
            <div className="flex flex-wrap items-center justify-center md:mt-[1rem] mt-[3rem] h-screen gap-10">
                <div className="shadow-2xl w-[15rem] h-[15rem]">
                    <Image src={IMG15} className="ml-[2.5rem] w-[10rem] h-[10rem] rounded-lg" alt="dkvvvd" priority />
                    <p className="text-center">{data.anggota}</p>
                    <h1 className="relative text-center">Anggota</h1>
                </div>
                <div className="shadow-2xl w-[15rem] h-[15rem]">
                    <Image src={IMG12} className="ml-[2.5rem] w-[10rem] h-[10rem]" alt="dkvvvd" priority />
                    <p className="text-center">{data.alumni}</p>
                    <h1 className="relative text-center">Alumni</h1>
                </div>
                <div className="shadow-2xl w-[15rem] h-[15rem]">
                    <Image src={IMG14} className="ml-[2.5rem] w-[10rem] h-[10rem]" alt="dkvvvd" priority />
                    <p className="text-center">{data.prestasi}</p>
                    <h1 className="relative text-center">Prestasi</h1>
                </div>
                <div className="shadow-2xl w-[15rem] h-[15rem]">
                    <Image src={IMG13} className="ml-[2.5rem] w-[10rem] h-[10rem]" alt="dkvvvd" priority />
                    <p className="text-center">{data.ada}</p>
                    <h1 className="relative text-center">ada ada ji itu</h1>
                </div>

            </div>
        </div>
    )
}

export default Statik