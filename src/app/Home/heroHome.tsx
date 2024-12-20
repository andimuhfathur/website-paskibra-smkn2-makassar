'use client'
import Image from "next/image"
import IMG16 from "../../../public/IMG-20231118-WA0084.jpg";
import IMG17 from "../../../public/paskib].jpg";
import IMG18 from "../../../public/mufid-majnun-La3MwNrgEDc-unsplash.jpg";
import styles from "./style.module.css";
import React, { useEffect } from "react";

const HeroHome: React.FC = () => {

    useEffect(() => {
        let currentIndex = 0;

        const runSlideShow = () => {
            // Ambil semua elemen dengan class 'rem'
            const items: NodeListOf<HTMLDivElement> = document.querySelectorAll(".rem");

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
            <div className={styles.slide}>
                <div className={styles.list} >
                    <div className={`${styles.items} ${styles.active} rem`}>
                        <Image src={IMG16} className={styles.img} alt="fbasklf" priority />
                        <div className={styles.component}>
                            <p>Juara Umum</p>
                            <h1>Paskibra Stemzha</h1>
                            <p>Di Kibar 12 Bendera 5</p>
                        </div>
                    </div>
                    <div className={`${styles.items} ${styles.active} rem `}>
                        <Image src={IMG17} className={styles.img} alt="fbasklf" priority />
                        <div className={styles.component}>
                            
                            <h1>Paskibra SMKN 2 Makassar</h1>
                            <p>Di Kibar 12 Bendera 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroHome