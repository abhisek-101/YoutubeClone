import React from "react";
import "./style/searchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import data from "../Data";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.ytimg.com/vi/oZlnSQXOcKY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnxfefrcZ9ToRxsEFwnQBvhbMxGw"
        channel="Ishan Raj Onta"
        verified
        subs="243k"
        noOfVideos={240}
        description="Sapanako Mayalu (unplugged) This song is dedicated to the lover"
      />
      <hr />
      {data.map((val, index) => {
        return (
          <VideoRow
            key={index}
            image={val.image}
            subs={val.subs}
            title={val.title}
            channel={val.channel}
            views={val.views}
            timestamp={val.timestamp}
            description={val.description}
          />
        );
      })}
    </div>
  );
};

export default SearchPage;
