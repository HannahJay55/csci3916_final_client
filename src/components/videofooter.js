import React from 'react'
import './videofooter.css'
import {MusicNoteOutlined} from "@mui/icons-material";
import Ticker from 'react-ticker'
const VideoFooter = ({ channel, description, song }) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteOutlined className="videoFooter__icon"/>
                    <Ticker mode="smooth">
                        {({index}) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="video footer"/>
        </div>
    )
}
export default VideoFooter