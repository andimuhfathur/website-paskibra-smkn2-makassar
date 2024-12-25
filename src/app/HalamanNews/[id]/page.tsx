"use client"
import Image from "next/image"
import img from "../../../../public/Capcut/IMG_20240817_231417.jpg"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
const HalNew = ({ params }: { params: { id: string } }) => {

    const [late, setLate] = useState([])
    const [bet, setbet] = useState<any[]>([])

    const fetchNew = async (param: string) => {
        const url = await fetch(`${process.env.NEXT_PUBLIC_API_GETBERITA}/${param}`, { cache: "no-store" })
        const res = await url.json()
        if (res?.data) {
            setbet([res.data])
        }
    }

    useEffect(() => {
        fetchNew(params.id)
    }, [params.id])



    useEffect(() => {
        const fetchLates = async () => {
            const url = await fetch(`${process.env.NEXT_PUBLIC_API_PAGINATION_NEWS}?limit=3`, { cache: "no-store" })
            const res = await url.json()
            setLate(res.data)
        }

        fetchLates()


    }, [])

    const router = useRouter()

    const kema = () => {
        router.push(`/pagination`)
    }
    return (
        <div className="p-4 md:pt-[0rem] pt-[2rem]">
            <div className="flex gap-8 p-4 ">
                {bet.length > 0 && (
                    <div className="">
                        <Image src={bet[0].image} width={200} height={200} className="w-[50rem] h-[25rem] object-cover shadow-2xl rounded-xl " priority alt="dfsfs" />
                    </div>
                )}
                
                <div className="md:block hidden md:left-[55rem] left-[0rem] md:top-[0rem] top-[20rem] p-4 w-[22rem] h-[25rem] shadow-2xl rounded-xl font-semibold gap-4">
                    <h1 className="text-[1.3rem]">post latest</h1>
                    {late.map((dates: any) => {
                        return (
                            <Link href={`/HalamanNews/${dates.id_berita}`} key={dates.id_berita}>
                            <div className="" key={dates.id_berita}>
                                <div className="flex w-[20rem] h-[6rem] shadow-2xl rounded-xl p-2">
                                    <Image src={dates.image} width={200} height={200} className="w-[7rem] h-[5rem] object-cover shadow-2xl rounded-xl" priority alt="dfsfs" />
                                    <h1 className="p-2">{dates.judul}</h1>
                                </div>
                                <br />
                            </div>

                            </Link>
                        )
                    })}

                </div>
            </div>
            {bet.length > 0 && (
                <div className="p-4">
                    <div className="text-[1.3rem] font-semibold">{bet[0].judul}</div>
                    <div className="md:w-[50rem] w-[20rem]">{bet[0].isi_berita}</div>
                </div>
            )}

            <div className="px-4">
                <button onClick={kema}>kembali</button>
            </div>

        </div>
    )
}

export default HalNew