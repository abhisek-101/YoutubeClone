import React from "react";
import "./style/videoCard.css";
import Avatar from "@material-ui/core/Avatar";
const Video = ({ image, title, channel, views, timestamp, channelImage }) => {
  return (
    <div className="recommendedVideos__videoCard">
      <img className="videoCard__thumbnail" src={image} alt="image" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views.{timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
