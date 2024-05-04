import React, {useEffect, useRef, useState} from 'react'
import './videolist.css'
import {useSelector, useDispatch, connect} from "react-redux";
import Video from "./video";
import {fetchVideos} from "../actions/videoActions";
const VideoList = () => {

    const videos = useSelector(state => state.video.videos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideos())
    }, [])

    return (
        <div className="videos">
            {videos.map(({ _id, url, channel, description, song, likes, shares,
                             messages }) => (
                <Video
                    key={_id}
                    id={_id}
                    url={url}
                    channel={channel}
                    description={description}
                    song={song}
                    likes={likes}
                    shares={shares}
                    messages={messages}
                />
            ))}
        </div>
    )
}

export default VideoList;