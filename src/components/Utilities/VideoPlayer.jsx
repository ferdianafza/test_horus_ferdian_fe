"use client";
import { XCircle } from "@phosphor-icons/react";
import YouTube from "react-youtube";
import { useState } from "react";

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseButton = () => {
        setIsOpen((prevState) => !prevState);
    };

    const option = {
        width: "300",
        height: "250",
    };

    const handleOpenButton = () => {
        setIsOpen((prevState) => !prevState);
    };

    const Player = () => {
        return (
            <div className="fixed bottom-0 right-0">
                <button
                    className="text-color-primary float-right bg-color-secondary px-3 mb-1"
                    onClick={handleCloseButton}
                >
                    X
                </button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        );
    };

    return isOpen ? (
        <Player />
    ) : (
        <button
            className="fixed bottom-5 right-5 p-2 bg-color-primary text-color-dark"
            onClick={handleOpenButton}
        >
            Tonton Trailer
        </button>
    );
};

export default VideoPlayer;
