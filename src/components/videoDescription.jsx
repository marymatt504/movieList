var VideoDetails = (props) => (
  <div className="video-player-details">
    <div className='descriptor'><em>Duration</em>: {props.duration}</div>
    <div className='descriptor'><em>ViewCount</em>: {props.viewCount}</div>
    <div className='descriptor'><em>LikeCount</em>: {props.likeCount}</div>
    <div className='descriptor'><em>DislikeCount</em>: {props.dislikeCount}</div>
    <div className='descriptor'><em>FavoriteCount</em>: {props.favoriteCount}</div>
  </div>
);

export default VideoDetails;