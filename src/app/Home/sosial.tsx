import Image from "next/image";
import istagram from "../../../public/1384031.png";
import facebook from "../../../public/facebook_icon_137647.webp";
import tik from "../../../public/1946552.png";
import youtube from "../../../public/152810.png";
import VideoYoutube from "../Component/youtube";
import Link from "next/link";
const Sosial = () => {
    return (
        <div className="md:flex block flex-wrab h-screen p-[2rem]">
            <div className="md:w-[50rem] md:h-[28rem] w-[20rem] h-[20rem] md:m-[1rem] m-0 shadow-2xl rounded-xl ">
                <h1 className="font-bold p-[1.5rem] text-[1.5rem] text-reto">Youtube</h1>
                <VideoYoutube/>
            </div>
            <div className="sm:flex sm:flex-col w-[20rem] md:h-[28rem] h-[22rem] md:m-[1rem] m-0 md:mt-0 mt-[2rem] shadow-2xl rounded-xl ">
                <h1 className="font-bold p-[1.5rem] text-[1.5rem] text-reto">Sosial Media</h1>
                <div className="ml-[1.5rem] mb-[10rem]">
                    <Link href={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fhumas.paskibra202mks%2Fp%2FDDoF65AvSTX%2F&psig=AOvVaw0kx5xGMINcV2GmELzkNdWy&ust=1739502162037000&source=images&cd=vfe&opi=89978449&ved=0CAQQn5wMahcKEwiI-4_V1L-LAxUAAAAAHQAAAAAQBg"}>
                    <div className="flex justify-center items-center w-[2.5rem] transition-all hover:w-[15rem] hover:justify-normal hover:p-1 after:content-[''] hover:after:content-['Istagram'] hover:after:p-4 h-[2.5rem] hover:after:text-[1.5rem] hover:after:text-[white] bg-gradient-three-colors  rounded-lg m-2">
                        <Image src={istagram} className="w-[2rem] h-[2rem]" alt="blvkjdfsjn" priority />    
                    </div>
                    </Link>
                    <Link href={"https://www.facebook.com/stemzha202/"}>
                        <div className="flex justify-center items-center w-[2.5rem] transition-all hover:w-[15rem] hover:justify-normal hover:p-1 after:content-[''] hover:after:content-['Facebook'] hover:after:p-4 h-[2.5rem] hover:after:text-[1.5rem] hover:after:text-[white] bg-blue-600 rounded-lg m-2">
                            <Image src={facebook} className="w-[2rem] h-[2rem]" alt="blvkjdfsjn" priority />
                        </div>
                    </Link>
                    

                    <div className="flex justify-center items-center w-[2.5rem] transition-all hover:w-[15rem] hover:justify-normal hover:p-1 after:content-[''] hover:after:content-['TikTok'] hover:after:p-4 h-[2.5rem] hover:after:text-[1.5rem] hover:after:text-[white] bg-green-700 rounded-lg m-2">
                        <Image src={tik} className="w-[2rem] h-[2rem]" alt="blvkjdfsjn" priority />
                    </div>
                    
                    <div className="flex justify-center items-center w-[2.5rem] transition-all hover:w-[15rem] hover:justify-normal hover:p-1 after:content-[''] hover:after:content-['Youtube'] hover:after:p-4 h-[2.5rem] hover:after:text-[1.5rem] hover:after:text-[white] bg-red-700 rounded-lg m-2">
                        <Image src={youtube} className="w-[2rem] h-[2rem]" alt="blvkjdfsjn" priority />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Sosial