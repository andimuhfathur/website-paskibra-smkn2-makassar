
import Image from "next/image"
import IMG1 from "../../../public/SAVE_20231119_063957.jpg";
const data = 'http://localhost:3000/Api'
import Informan from "./informan";

interface mydata {
    id: number,
    img: string,
    title: string,
    kategori: string,
    tanggal_update: string

}


const HandleInforman = async () => {
    
    const respon = await fetch(data)
    const datas: mydata[] = await respon.json()
    
    



    

    

    
    return (

        <div className="w-max gap-4">
            {datas.map((dat) => {
                return (
                    <div className="flex md:w-[30rem] md:h-[8rem] p-2  m-2 rounded-xl shadow-2xl w-[20rem] h-[8rem]" key={dat.id}>
                        <Image src={IMG1} className="w-[10rem] h-[7rem] rounded-xl  backdrop-brightness-50 object-cover" alt="Ini paskibra stemzha" />
                        <h1 className=" ml-2">{dat.title}</h1>
                    </div>
                )
            })}

        </div>
   )

}

export default HandleInforman