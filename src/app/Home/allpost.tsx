import Pagination from "./pagination/paginationPost"


const Allpost = () => {
    
    return (
        <div className="flex flex-wrab flex-col items-center  h-screen">
            <h1 className="flex  font-bold m-4">All Post</h1>
            <div className="w-full md:h-[50rem] h-[70rem] bg-slate-800 shadow-2xl gap-1 p-2">
            <div className="grid xl:grid-cols-6 md:grid-cols-5 grid-cols-2">
                <div className="w-[10rem] h-[13rem] bg-white m-2"></div>
                <div className="w-[10rem] h-[13rem] bg-white m-2"></div>
                <div className="w-[10rem] h-[13rem] bg-white m-2"></div>
                <div className="w-[10rem] h-[13rem] bg-white m-2"></div>
                <div className="w-[10rem] h-[13rem] bg-white m-2"></div>
                <div className="w-[10rem] h-[13rem] bg-white m-2"></div>
                
            </div>
                <Pagination />
            </div>
        </div>
    )
}

export default Allpost