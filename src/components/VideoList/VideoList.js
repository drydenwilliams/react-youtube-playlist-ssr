import React from 'react'
import VideoListItem from '../VideoListItem/VideoListItem'

const VideoList = ({ videosList, onVideoClick }) => {

    const videoListItems = videosList.map((video, index) => {
        return <VideoListItem 
            key={video.id}
            video={video}
            onVideoClick={onVideoClick}
        />
    })

    return (
        <div className="video-list">
            <h2>My YouTube Playlist</h2>
            {videoListItems}
        </div>
    )
}

export default VideoList
