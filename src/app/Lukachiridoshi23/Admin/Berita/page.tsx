import Navbar from "../Navbar/Navbar"
import NewsPost from "./handleBerita/[id]/page"
import Berita from "./postBerita/page"


const News = async () => {
    return (
        <div className="flex">
            <Navbar />
            <div className="block">
                <Berita />
                <NewsPost />
            </div>
        </div>
    )
}

export default News