import './VideoItem.css';
import React from 'react';

const VideoItem = ( {video, onVideoSelect} ) => {

  /*onVideoClick = (video) => {
    onVideoSelect(video);
  }*/

  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      <div className="content">
        <span className="header">{video.snippet.title}</span>
      </div>
    </div>
  );

}

export default VideoItem;
