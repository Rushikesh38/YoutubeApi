import React from 'react';
import Videoitem from './Videoitem';
const VideoList = ({ Videos, onVideoSelect }) => {
  const renderList = Videos.map((video) => {
    return <Videoitem onVideoSelect={onVideoSelect} video={video} />;
  });
  return (
    <>
      <div className="ui relaxed divided list"> {renderList}</div>

    </>
  )
}
export default VideoList;