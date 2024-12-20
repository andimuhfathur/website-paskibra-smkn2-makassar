"use client"
import style from "./style.module.css"
const Search = () => {
    return (
        <div className="text-[black]">
            <button className="relative left-[90%] md:text-black text-white">%</button>
            <input type="text" name="cari" id="cari" className={`${style.Search} p-1 outline-none font-semibold`} />
        </div>
    )
}

export default Search