"use client"
import style from "./style.module.css"
const HandlePutBerita = () => {
    const handlePopPost = () => {

        document.addEventListener("click", function () {
            const up = document.getElementById("popup")
            if (up) {
                up.style.display = "block"
            }

        })

    }

    const handleCancelPopPost = () => {
        document.addEventListener("click", function () {
            const upPop = document.getElementById("popup")
            if (upPop) {
                upPop.style.display = "none"
            }
        })
    }
    return (
        <div className={style.hal1}>
            {/* membuat button */}
            <div className={style.button}>
                <button type="submit" className="w-[9rem] h-auto p-3 bg-indigo-400 rounded-xl ml-[17rem]" onClick={handlePopPost} >
                    <h1 className="text-white font-semibold">Update Berita</h1>
                </button>
            </div>
            {/* membuat pop */}
            <div id="popup" className={style.popupAnimation}>
                <div className="flex items-center justify-center w-[78.9rem] h-screen bg-black bg-opacity-30 shadow-2xl">
                    <div className="w-[30rem] h-auto bg-white rounded-xl p-4">
                        <form action="formPostBerita" method="post">
                            <h1 className="font-semibold text-[1.3rem]">Update Berita</h1>
                            <label htmlFor="judulImage" className="font-semibold">Judul Image</label>
                            <br />
                            <input type="text" name="judulImage" id="judulImage" className="w-auto h-[2rem] border-2 border-black rounded-xl p-2" />
                            <br />
                            <label htmlFor="urlImage" className="font-semibold">Image</label>
                            <br />
                            <input type="text" name="urlImage" id="urlImage" className="w-auto h-[2rem] border-2 border-black rounded-xl p-2" />
                            <br />
                            <button type="submit" className="w-[5rem]  h-[3rem] m-2 p-1 bg-indigo-400 rounded-xl hover:shadow-xl" >
                                <h1 className="text-white font-semibold">Update </h1>
                            </button>
                            <button type="submit" className="w-[5rem]  h-[3rem] m-2 p-1 bg-indigo-400 rounded-xl hover:shadow-xl" onClick={handleCancelPopPost}>
                                <h1 className="text-white font-semibold">Kembali</h1>
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HandlePutBerita