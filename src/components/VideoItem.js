export const VideoItem = ({video, onVideoClick}) => {
    const {snippet: {thumbnails: {medium: {url}}, title}} = video;
    return(
        <div className="ui segment video-item" onClick={() => onVideoClick(video)} style = {{cursor: "pointer"}}>
             <img className="ui middle aligned image" alt = {title} src={url}></img>
             <span>{title}</span>
        </div>
    )
}