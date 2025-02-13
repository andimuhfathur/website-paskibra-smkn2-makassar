const VideoYoutube = () => {
    return (
        <div className="flex items-center justify-center p-4">
            <iframe
                className="md:w-[40rem] md:h-[20rem] w-[16rem] h-[10rem] shadow-2xl rounded-xl"
                src="https://www.youtube.com/embed/hke92HmHEiE?si=PqHU2BrISOzR6WNs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoYoutube;