import React from 'react'
import PropTypes from 'prop-types';

const Video = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoId = video.snippet.resourceId.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe width="100%" height="315" src={url}></iframe>
            </div>
            <div className="details">
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

Video.propTypes = {
    video: PropTypes.object
}

export default Video