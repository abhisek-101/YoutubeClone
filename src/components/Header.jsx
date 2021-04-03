import React, { useState } from "react";
import "./style/header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const img_link =
  "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg";
const profile_link =
  "https://scontent.fbdp1-1.fna.fbcdn.net/v/t1.6435-9/153536234_1574685472741174_2374630081409274695_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZgsapnI1lCkAX_dWfuF&_nc_ht=scontent.fbdp1-1.fna&oh=659a1fa1d7504d7b025a92d5b270b881&oe=608E5066";
const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <>
      <div className="header">
        <div className="header__left">
          <MenuIcon />
          <Link to="/">
            <img className="header__logo" src={img_link} alt="youtube_logo" />
          </Link>
        </div>
        <div className="header__input">
          <input
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
            type="text"
            placeholder="Search"
          />
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton" />
          </Link>
        </div>
        <div className="header__icons">
          <VideoCallIcon className="header__icon" />
          <AppsIcon className="header__icon" />
          <NotificationsIcon className="header__icon" />
          <Avatar className="header__icon" src={profile_link} alt="avatar" />
        </div>
      </div>
    </>
  );
};

export default Header;
