import axios from "axios";

const apiKey = 'AIzaSyC2r7mNH6xk59mZvxgzRP7FLjU0qN5imG4';

export const youtube = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: apiKey,
        safeSearch: 'strict'
    }
});
