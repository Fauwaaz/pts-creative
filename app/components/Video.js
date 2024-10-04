const Video = () => {
    return (
        <>
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src="/earth.mp4" type="video/mp4" preload="metadata" />
                </video>
            </div>
        </>
    )
}

export default Video