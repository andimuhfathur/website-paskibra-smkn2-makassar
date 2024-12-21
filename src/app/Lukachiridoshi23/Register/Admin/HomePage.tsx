"use client"
import jwt from "jsonwebtoken"
import { useEffect, useState } from "react"

interface Detoken {
    id: string
    username: string
    image: string
    email: string
    password: string
}
const Home = async () => {

//     const [user, setUser] = useState<Detoken | null>(null)

//     useEffect(() => {
//         // mengambil data dari token 
//         const token = document.cookie.split(';').find(row => row.startsWith('token = '))?.split('=')[1]

//         if (token) {
//             const deco = jwt.decode(token) as Detoken
//             if (deco) {
//                 setUser(deco)
//             }
//         }
// }, [])
    
    return (
        <div className="flex w-full gap-4 h-auto">
            <div className="w-[75%] p-4">
                <h1 className="text-[2rem]">Hello Admin</h1>
        </div>
        </div>
        
    )
}

export default Home