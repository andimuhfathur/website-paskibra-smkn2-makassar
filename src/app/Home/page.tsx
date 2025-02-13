import Informan from "../Component/informan";
import Sosial from "./sosial";
import HeroHome from "./heroHome";
import Pengibaran from "./pengibaran";
import Footer from "./foo";




const Home = async () => {

    return (

        <div className="font-semibold">
            <HeroHome />
            <Informan  />
            <Pengibaran />
            <Sosial />
            <Footer />
        </div>
    )
}

export default Home

