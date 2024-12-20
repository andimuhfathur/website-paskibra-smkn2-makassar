"use client"
import Image from "next/image"
import style from "./style.module.css"
import image1 from "../../../public/Paskibniee/IMG_20240817_114800.jpg"
import image2 from "../../../public/Paskibniee/IMG_20240817_114902.jpg"
import image3 from "../../../public/Paskibniee/IMG_20240817_114919.jpg"
import image4 from "../../../public/Paskibniee/IMG_20240817_114941.jpg"
import image5 from "../../../public/Paskibniee/IMG_20240817_115012.jpg"
import React from "react"
import { ReactTyped } from "react-typed"
import { useEffect } from "react"

const Hero = () => {

    useEffect(() => {
        let currentIndex = 0;

        const runSlideShow = () => {
            // Ambil semua elemen dengan class 'aksi'
            const items: NodeListOf<HTMLDivElement> = document.querySelectorAll(".aksi");

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
        <div className={style.hero}>
            <div className={style.list_image}>
                <div className={`${style.image} aksi`}>
                    <Image src={image1} className={style.item} priority alt="kljnfas" />
                </div>
                <div className={`${style.image} aksi`}>
                    <Image src={image2} className={style.item} priority alt="kljnfas" />
                </div>
                <div className={`${style.image} aksi`}>
                    <Image src={image3} className={style.item} priority alt="kljnfas" />
                </div>
                <div className={`${style.image} aksi`}>
                    <Image src={image4} className={style.item} priority alt="kljnfas" />
                </div>
                <div className={`${style.image} aksi`}>
                    <Image src={image5} className={style.item} priority alt="kljnfas" />
                </div>
            </div>

            <div className={style.text}>
                <h1 className={style.text_judul}>Kami Paskibra <span className="text-[red]">Stemzha</span></h1>
                <p className={style.text_isi}>Kami <ReactTyped
                    className="text-[red]"
                    strings={["Tegas", "Disiplin", "Juara!!!"]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop /></p>

            </div>

        </div>
    )
}

export default Hero