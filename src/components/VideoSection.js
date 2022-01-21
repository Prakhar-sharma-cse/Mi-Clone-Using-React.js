import React from 'react'
import VideoSectionCard from './VideoSectionCard.js'
import '../styles/VideoSection.css'

const VideoSection = ({ Video }) => {
    return (
        <div className="VideoSection">
            {
                Video.map((item, index) => (
                    <VideoSectionCard key={index + item} name={item.name} image={item.image} index={index} />
                ))
            }
        </div>
    )
}

export default VideoSection
