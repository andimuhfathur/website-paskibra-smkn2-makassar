'use client'
import React from "react";
import YouTube from "react-youtube";


const VideoYoutube = () => {

    const opts = {
        width: 760,
        height: 300,
        playerVars: {
            autoplay: 1
        }
    }

    const onReady = (event : any) => {
        event.target.pauseVideo()
    }
    return (
        <div className="flex items-center justify-center p-4">
            <iframe
                className="md:w-[40rem] md:h-[20rem] w-[16rem] h-[10rem] shadow-2xl rounded-xl"
                src="https://www.youtube.com/embed/60axfKOxQbg?si=8BIecFQbpPsWOlFP"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               
                ></iframe>
        </div>
    )
}

export default VideoYoutube