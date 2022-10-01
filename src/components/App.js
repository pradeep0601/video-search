import React from "react";
import { youtube } from "../apis/youtube";
import { SearchBar } from "./SearchBar";
import { VideoDetail } from "./VideoDetail";
import { VideoList } from "./VideoList";

export class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    onFormSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0]
        })
    }

    componentDidMount() {
        this.onFormSubmit('tom and jerry');
    }

    onVideoClick = (video) => {
        console.log('video: ', video);
        this.setState({
            selectedVideo: video
        })
        console.log(this.state.selectedVideo)
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onTermSubmit = {this.onFormSubmit}/>
                <div className='ui internally celled grid'>
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video = {this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos = {this.state.videos} onVideoClick = {this.onVideoClick}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
