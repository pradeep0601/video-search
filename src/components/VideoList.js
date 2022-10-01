import { VideoItem } from "./VideoItem"

export const VideoList = ({videos, onVideoClick}) => {
    const videoItems = videos.map(video => <VideoItem key = {video.id.videoId} video = {video} onVideoClick = {onVideoClick}></VideoItem>)
    return(
        <div className="ui relaxed divided list">
            {videoItems}
        </div>
    )
}