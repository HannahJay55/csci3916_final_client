import React, {useRef, useState} from 'react'
import './video.css'
import VideoFooter from './videofooter'
import VideoSidebar from './videosidebar'
import Comments from "./comments";
import Login from "./login2";
const Video = ({ id, url, channel, description, song, likes, shares, messages }) => {
    const [playing, setPlaying] = useState(false);
    const [commentsEnabled, setCommentsEnabled] = useState(false);
    const [loginEnabled, setLoginEnabled] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <div className="video">
            <video
                    src={url}
                    className="video__player"
                    loop
                    ref={videoRef}
                    onClick={handleVideoPress}
            >
            </video>
            <Comments commentsEnabled={commentsEnabled} enableComments={setCommentsEnabled} videoId={id}/>
            <Login loginEnabled={loginEnabled} enableLogin={setLoginEnabled}/>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar enableLogin={setLoginEnabled} enableComments={setCommentsEnabled} likes={likes} shares={shares} messages={messages} videoId={id} />
        </div>
    )
}

export default Video