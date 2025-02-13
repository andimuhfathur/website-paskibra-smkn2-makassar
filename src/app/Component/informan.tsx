"use client"
import Image from "next/image"
import IMG1 from "../../../public/SAVE_20231119_063957.jpg";
import IMG2 from "../../../public/paskib].jpg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";



const Informan = () => {

    const [data, setData] = useState<[]>([])
    const [dataNews, setdataNews] = useState<[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const url = await fetch(`/api/handlePaginationNews?limit=5`, { cache: "no-store" })
            const res = await url.json()
            setData(res.data)
        }
        fetchData()

        const fetchDataNews = async () => {
            const url = await fetch('/api/handlePaginationNews?limit=3', { cache: "no-store" })
            const res = await url.json()
            setdataNews(res.data)
        }

        fetchDataNews()
    }, [])

    const router = useRouter()

    const handleLihat = () => {
        router.push('/pagination')
    }


    useEffect(() => {
        let currentIndex = 0;

        const runSlideShow = () => {
            // Ambil semua elemen dengan class 'rem'
            const items: NodeListOf<HTMLDivElement> = document.querySelectorAll(".jalankan");

            if (items.length === 0) return; // Pastikan elemen tersedia

            // Sembunyikan semua elemen
            items.forEach((item) => {
                item.style.display = "none";
            });

            // Pastikan index tidak melebihi jumlah item
            if (currentIndex >= items.length) {
                currentIndex = 0;
            }

            // Tampilkan elemen saat ini
            if (items[currentIndex]) {
                items[currentIndex].style.display = "block";
                currentIndex++;
            }

            // Ulangi setiap 10 detik
            setTimeout(runSlideShow, 10000);
        };

        runSlideShow();
    }, []);

    return (
        <div>
            <div className="h-screen">
                <div className="flex flex-wrap p-4 gap-4">
                    <div className="w-[40rem] h-[26rem] p-4  shadow-xl rounded-xl ">
                        <Link href="/Kesiswaan">
                            <h1 className="font-semibold  text-xl items-center">Prestasi</h1>
                            {dataNews.map((datas: any) => {
                                return (
                                    <Link href={`/HalamanNews/${datas.id_berita}`} key={datas.id_berita} className="jalankan">
                                        <div className="absolute">
                                            <Image src={datas.image} width={200} height={200} className="p-0 rounded-xl md:w-[38rem] md:h-[22rem] absolute brightness-50 object-cover w-[100rem] h-[22rem]" alt="Ini paskibra stemzha" priority />
                                            <h2 className="relative text-[white] md:text-[1rem] text-sm  font-semibold mt-56 p-2 md:w-[38rem] w-[18rem]">{datas.judul}</h2>
                                            <p className="relative text-[white] md:text-[1rem] text-sm p-2 text-justify md:w-[35rem] w-[16px] whitespace-nowrap text-ellipsis font-normal overflow-hidden">{datas.isi_berita}</p>
                                        </div>

                                    </Link>
                                )
                            })}

                        </Link>
                    </div>

                    <div className="md:w-[35rem] md:h-[26rem] p-4 shadow-xl  rounded-xl w-[23.1rem] h-[26rem] ">
                        <h1 className=" font-semibold  text-xl items-center">Info Terbaru</h1>
                        <div className="h-[70%] overflow-y-scroll skr">
                            <div className="w-max gap-4">
                                {data.map((dat: any) => {
                                    return (
                                        <Link href={`/HalamanNews/${dat.id_berita}`} key={dat.id_berita}>
                                            <div className="flex md:w-[30rem] md:h-[8rem] p-2  m-2 rounded-xl shadow-2xl w-[20rem] h-[8rem] " key={dat.id_berita}>
                                                <Image src={dat.image} width={400} height={200} className=" w-auto h-auto rounded-xl  backdrop-brightness-50 object-cover" alt="Ini paskibra stemzha" />
                                                <h1 className=" ml-2">{dat.judul}</h1>
                                            </div>
                                        </Link>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="mt-11">

                            <button className="border-2 p-[0.5rem] rounded-3xl  font-semibold  transition-all hover:bg-white hover:" onClick={handleLihat} >Lihat Semua</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Informan