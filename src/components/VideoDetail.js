export const VideoDetail = ({video}) => {
    if(!video) {
        return <div class="ui active centered inline loader"></div>
    }
    const {id: {videoId}, snippet: {title, description}} = video;
    const embedVideoURL = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div className="ui segment">
            <div className="ui embed">
                <iframe title = {title} src={embedVideoURL}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}