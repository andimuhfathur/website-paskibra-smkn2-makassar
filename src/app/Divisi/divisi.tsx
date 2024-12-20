import Image from "next/image"
import img1 from "../../../public/Pemimpin paskibra/IMG_20240818_002051.jpg"
import style from "./visi.module.css"
const Visi = () => {
    return (
        <div className="md:h-screen h-[250vh]">
            <div className="grid justify-center p-4 gap-4">
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['Ketua'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['Ketua_Berfungsi_Sebagai\APengatur_Organisasi\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 md:ml-[3rem] ml-[0.3rem] p-4 gap-4">
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['Sekertaris'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['Sekertaris_Berfungsi_Sebagai\APenanggung_Jawab_Surat\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['W.External'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['Wakil_External_Berfungsi\AMengatur_Luar_Lingkup\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['W.Internal'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['Wakil_Internal_Berfungsi\AMengatur_Dalam_Lingkup\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['Bendahara'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['Bendahara_Berfungsi\APengatur_Uang_Kas\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-1 justify-center md:ml-[0] ml-[0.3rem] p-4 gap-4">
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['Div_Humas'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['Humas_bertugas_\AMengatur_Media_Sosial\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['Div_Jualan'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['Jualan_Berfungsi_Sebagai\AMata_Pengharian\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['Div_Kesek'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['Kesek_Berfungsi\AMenjaga_Kesekretariatan\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['Div_PMB'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['PMB_Berfungsi_Sebagai\AMelatih_Skill_Anggota\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
                <div className="md:w-[15rem] w-[22rem] h-[10rem] bg-gradient-to-t from-[red] to-[#910a0a] transition-colors hover:bg-gradient-to-b hover:from-[red] hover:to-[#910a0a] rounded-xl">
                    <h1 className="flex justify-center items-center h-[10rem] before:text-[white] content-[''] before:content-['Div_Latihan'] before:text-[2rem] before:font-semibold transition-all hover:before:hidden hover:after:content-['Latihan_Berfungsi_Melatih\ASkill_Baris_berbaris_Anggota\APaskibra_Stemzha'] hover:after:text-center hover:after:font-semibold hover:after:whitespace-pre hover:after:text-[white] hover:shadow-xl"></h1>
                </div>
            </div>
        </div>
    )
}

export default Visi