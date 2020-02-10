import React from 'react';

const VideoCard = (props) => {
    return (
        <div className="VideoCard">
            <img src={props.videoThumb} alt="Video Thumbnail" />
            <h3>{props.videoTitle}</h3>
        </div>
    )
};

export default VideoCard;