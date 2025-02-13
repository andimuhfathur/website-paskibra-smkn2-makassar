
import jwt from "jsonwebtoken"
import { useEffect, useState } from "react"
import { useSession,signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { auth } from "../../../../auth"

const Home = async () => {

    const session = await auth()
    console.log(session?.user);
    
    
    return (
        <div className="flex w-full gap-4 h-auto">
            <div className="w-[75%] p-4">
                <h1 className="text-[1rem]">Hello {session?.user.email}</h1>
        </div>
        </div>
        
    )
}

export default Home