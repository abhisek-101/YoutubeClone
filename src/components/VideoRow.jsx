import React from "react";
import "./style/videoRow.css";

const VideoRow = ({
  image,
  subs,
  title,
  channel,
  views,
  timestamp,
  description,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt={channel} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .
          <span className="videoRow__subs">
            <span className="videoRow__subNo"> {subs}</span> suscribers
          </span>{" "}
          . {views} views . {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
