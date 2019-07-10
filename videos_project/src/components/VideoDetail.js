import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return (
      <div className="video-detail">
        <h3 className="header">Lets search some videos 📼</h3>
      </div>
      )
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`

  return (
    <div className="video-detail">
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
