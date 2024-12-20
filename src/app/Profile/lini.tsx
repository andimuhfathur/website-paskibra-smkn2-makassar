"use client"
import Image from "next/image"
import Image1 from "../../../public/Pemimpin paskibra/IMG_20240818_002051.jpg"
import Image2 from "../../../public/Pemimpin paskibra/IMG_20240818_002013.jpg"
import Image3 from "../../../public/Pemimpin paskibra/IMG_20240818_002106.jpg"
import Image4 from "../../../public/Pemimpin paskibra/IMG_20240818_001951.jpg"
import Image5 from "../../../public/Pemimpin paskibra/IMG_20240818_002137.jpg"
import style from "./lini.module.css"
import { useEffect } from "react"
const Lini = () => {

    useEffect(() => {
        let currentIndex = 0;

        const runSlideShow = () => {
            // Ambil semua elemen dengan class 'rem'
            const items: NodeListOf<HTMLDivElement> = document.querySelectorAll(".start");

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
                items[currentIndex].style.display = "flex";
                currentIndex++;
            }

            // Ulangi setiap 10 detik
            setTimeout(runSlideShow, 10000);
        };

        runSlideShow();
    }, []);

    
    return (
        <div className={style.lini}>
    <h1 className={style.ju}>Lini masa Ketua Paskibra Stemzha</h1>
            <div className={style.leaders}>
                <div className={`${style.leader} start`}>
                    <div className={style.component}>
                        <h1 className={style.nama}>Amaluddin</h1>
                        <p className={style.tahun}>2015-2016</p>
                    </div>
                    <div>
                        <Image src={Image1} className={style.img} alt="bkflsdj" priority/>
                    </div>
                </div>
                <div className={`${style.leader} start`}>
                    <div className={style.component}>
                        <h1 className={style.nama}>Hakam</h1>
                        <p className={style.tahun}>2017-2018</p>
                    </div>
                    <div>
                        <Image src={Image2} className={style.img} alt="bkflsdj" priority/>
                    </div>
                </div>
                <div className={`${style.leader} start`}>
                    <div className={style.component}>
                        <h1 className={style.nama}>Afdy</h1>
                        <p className={style.tahun}>2019-2020</p>
                    </div>
                    <div>
                        <Image src={Image3} className={style.img} alt="bkflsdj" priority/>
                    </div>
                </div>
                <div className={`${style.leader} start`}>
                    <div className={style.component}>
                        <h1 className={style.nama}>Syaqib Bahari</h1>
                        <p className={style.tahun}>2022-2023</p>
                    </div>
                    <div>
                        <Image src={Image4} className={style.img} alt="bkflsdj" priority/>
                    </div>
                </div>
                <div className={`${style.leader} start`}>
                    <div className={style.component}>
                        <h1 className={style.nama}>Sajid Al bahari</h1>
                        <p className={style.tahun}>2023-2024</p>
                    </div>
                    <div>
                        <Image src={Image5} className={style.img} alt="bkflsdj" priority/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lini