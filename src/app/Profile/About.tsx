import Image from "next/image"
import Image1 from "../../../public/Capcut/IMG_20240817_231309.jpg"
import Image2 from "../../../public/Capcut/IMG_20240817_231324.jpg"
import Image3 from "../../../public/Capcut/IMG_20240817_231342.jpg"
import Image4 from "../../../public/Capcut/IMG_20240817_231417.jpg"
const About = () => {
    return (
        <div className="">
            <div className="md:flex block md:h-[40rem] h-[73rem] p-4 md:mt-[5rem]  shadow-2xl">
                
                <div className="flex flex-col justify-center font-semibold h-[25rem] ">
                    <h1 className="flex items-center justify-start text-2xl mt-[2rem]">Apa Itu Paskibra Stemzha ?</h1>
                    <br />
                    <p className="flex md:w-[25rem] w-[22rem] font-normal items-center p-4  ">
                        Paskibra stemzha itu tegas,disiplin,pemberani,keren,dan tanggung jawab dalam smua hal,
                        Paskibra stemzha juga sangat teratur baik di dalam sekolah maupun di luar sekolah,
                        anggota Paskibra stemzha juga sdh pasti org nya bertanggung jawab,internal maupun
                        external nya juga baik,kepengurusan nya juga sangat teratur
                    </p>
                </div>


                <div className="grid md:grid-cols-4 grid-cols-1 md:ml-[5rem] ml-[0.5rem] md:mt-[4rem] mt-[0] gap-5 text-[white] p-0">
                    <div className="bg-slate-900 rounded-xl
                     md:w-[10rem] w-[21rem] md:h-[25rem] h-[10rem] p-0 transition-all hover:p-2  bg-gradient-to-b from-transparent to-black border-3 order-2 border-slate-900 z-[1]">
                        <Image src={Image1} className="absolute brightness-50 transition-all hover:brightness-100 md:w-[10rem] w-[21rem] md:h-[25rem] h-[10rem] object-cover rounded-xl" priority alt="cjh" />
                    </div>
                    <div className="bg-slate-900 rounded-xl
                     md:w-[10rem] w-[21rem] md:h-[25rem] h-[10rem] p-0 transition-all hover:p-2 bg-gradient-to-b from-transparent to-black">
                        <Image src={Image2} className="absolute brightness-50 transition-all hover:brightness-100 md:w-[10rem] w-[21rem] md:h-[25rem] h-[10rem] object-cover rounded-xl" priority alt="cjh" />
                    </div>
                    <div className="bg-slate-900 rounded-xl
                     md:w-[10rem] w-[21rem] md:h-[25rem] h-[10rem] p-0 transition-all hover:p-2 bg-gradient-to-b from-transparent to-black">
                        <Image src={Image3} className="absolute brightness-50 transition-all hover:brightness-100 md:w-[10rem] w-[21rem] md:h-[25rem] h-[10rem] object-cover rounded-xl" priority alt="cjh" />
                    </div>
                    <div className="bg-slate-900 rounded-xl
                     md:w-[10rem] w-[21rem] md:h-[25rem] h-[10rem] p-0 transition-all hover:p-2 bg-gradient-to-b from-transparent to-black">
                        <Image src={Image4} className="absolute brightness-50 transition-all hover:brightness-100 md:w-[10rem] w-[21rem] md:h-[25rem] h-[10rem] object-cover rounded-xl" priority alt="cjh" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About