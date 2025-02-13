import { useSession, signOut } from "next-auth/react";
import Home from "./HomePage"
import Navbar from "./Navbar/Navbar"
const Lukachiridoshi = () => {
    return (
        <div className="flex">
            <Navbar />
            <Home />
        </div>
    )
}

export default Lukachiridoshi