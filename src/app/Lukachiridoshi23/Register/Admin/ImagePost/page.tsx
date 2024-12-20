import Navbar from "../Navbar/Navbar"
import HandlePostimage from "./formPostBerita/page"
import HandleGetBerita from "./handleGetBerita/page"

const ImagePost = () => {
    return (
        <div className="flex relative">
            <div className="absolute">
            <Navbar />
            </div>
            <div className="relative">
                <HandlePostimage />
                <HandleGetBerita />
            </div>
        </div>
    )
}

export default ImagePost