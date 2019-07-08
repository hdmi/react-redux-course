import axios from 'axios';

const YOUTUBE_KEY = ${process.env.REACT_APP_YOUTUBE_API};



export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
  }
});
