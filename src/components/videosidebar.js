import React, { useState } from 'react'
import './videosidebar.css'
import {Launch, ExitToApp, FavoriteRounded, FavoriteBorderRounded, MessageRounded, ShareRounded} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../actions/authActions";

const VideoSidebar = ({ enableLogin, enableComments, likes, shares, messages, videoId }) => {

    const loggedIn = useSelector(state => state.auth.loggedIn);
    const commentCount = useSelector(state => state.comment.comments[videoId] ? state.comment.comments[videoId].length : 0);

    const dispatch = useDispatch();

    const [liked, setLiked] = useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {loggedIn ?
                    <ExitToApp fontSize="large" onClick={e => dispatch(logoutUser())}/>
                    : <Launch fontSize="large" onClick={e => enableLogin(true)}/>
                }
                <p>{loggedIn ? "Log Out" : "Log In"}</p>
            </div>
            <div className="videoSidebar__button">
                {liked ? <FavoriteRounded fontSize="large" onClick={e =>
                    setLiked(false)}/> : <FavoriteBorderRounded fontSize="large"
                                                                onClick={e => setLiked(true)}/>}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageRounded fontSize="large" onClick={e => {
                    enableComments(true);
                    console.log("enable comments")
                }}/>
                <p>{commentCount}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareRounded fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}
export default VideoSidebar