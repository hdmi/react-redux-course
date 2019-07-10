import axios from 'axios';

const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_API;

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: YOUTUBE_KEY,
    type: 'video'
  }
});

export default youtube;
