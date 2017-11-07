import React from 'react'
import PropTypes from 'prop-types';
import {truncateString} from '../../utils/string'
import './VideoListItem.scss'

const VideoListItem = ({ video, onVideoClick }) => {
    let imageURL = null

    if (video.snippet.thumbnails) {
        imageURL = video.snippet.thumbnails.high.url;
    }

    const formattedDate = new Date(video.snippet.publishedAt).toDateString()

    return (
        <div className="video-list__item" onClick={() => onVideoClick(video)}>
            <div className="image">
                <img src={imageURL} />
            </div>
            <div className="content">
                <h2 className="heading">{video.snippet.title}</h2>
                <h4 className="date">{formattedDate}</h4>
                <p className="description">{truncateString(video.snippet.description)}</p>
            </div>
        </div>
    )
}

VideoListItem.propTypes = {
    video: PropTypes.object
}

export default VideoListItem