import React from "react";
import "./style/recVid.css";
import VideoCard from "./VideoCard";
import data from "../Data";
const RecVid = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {data.map((val, index) => {
          return (
            <VideoCard
              key={index}
              image={val.image}
              title={val.title}
              channel={val.channel}
              views={val.views}
              timestamp={val.timestamp}
              channelImage={val.channelImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecVid;
