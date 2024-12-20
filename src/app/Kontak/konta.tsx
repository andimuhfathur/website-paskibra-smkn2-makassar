"use client"
import { useState } from "react"
const Kontak = () => {
    const [username, setUsername] = useState("")
    const [pesan, setPesan] = useState("")

    const kirimPesan = () => {
        const NoHp = '6288706082297'
        // let usernameURL = `https://wa.me/${NoHp}?text=${encodeURIComponent(username)}`
        let pesanURL = `https://wa.me/${NoHp}?text=${encodeURIComponent(pesan)}`

        window.open(pesanURL)
    }
    return (
        <div className="h-screen bg-black p-4">
            <h1 className="text-[2rem] text-[white] font-semibold mt-[5rem]">Kontak Paskibra <span className="text-[red]">Stemzha</span></h1>
            <form action="/Kontak" method="post">
                <label htmlFor="username" className="text-[1.5rem] text-[white] font-semibold mt-[5rem]">Username</label>
                <br />
                <input type="text" className="mt-[0.5rem] w-[20rem] rounded-lg p-3 h-[2rem] font-semibold" name="username" id="username" placeholder="Username" required />
                <br />
                <label htmlFor="pesan" className="text-[1.5rem] text-[white] font-semibold mt-[5rem]">pesan</label>
                <br />
                <input type="text" value={pesan} onChange={(e) => {
                    setPesan(e.target.value)
                }}  className="mt-[0.5rem] w-[20rem] rounded-lg p-3 h-[2rem] font-semibold" name="pesan" id="pesan" placeholder="pesan" required />
                <br />
                <button type="submit" className="mt-[1rem] w-[5rem] h-[2.5rem] rounded-lg text-[black] font-semibold bg-white transition-all hover:bg-[red] hover:text-[white]" onClick={kirimPesan}>Kirim</button>
            </form>
        </div>
    )
}

export default Kontak