import axios from "axios";

const apiKey = 'AIzaSyChV7Xo2vHJ9I2NWII-HKOUIKm0KEKC_pI';

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
