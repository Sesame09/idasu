import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { icons } from './images';
import Logo from './assets/icons/idasu_logo.svg';
import './SideBar.css';

function SideBar() {
  const location = useLocation();

  // 각 페이지 폰트 색상

  return (
    <div className="SideBar">
      <div className="main-logo">
        <Link to="/">
          <img src={Logo} alt='main' className="logo-img"/>
        </Link>
      </div>
      <div className="pages">
      <NavLink to='/illustration' className="NavLink" style={{ color: location.pathname === "/illustration" ? "#304865" : "#B5BECB" }}>ILLUSTRATION</NavLink>
      <NavLink to='/virtual-illust' className="NavLink" style={{ color: location.pathname === "/virtual-illust" ? "#304865" : "#B5BECB" }}>VIRTUAL ILLUST</NavLink>
      <NavLink to='/character-design' className="NavLink" style={{ color: location.pathname === "/character-design" ? "#304865" : "#B5BECB" }}>CHARACTER DESIGN</NavLink>

      </div>
      <div className="icons">
        <div className="icons-helper">
          <a href="mailto:idasu1143@gmail.com" target="_blank" rel="noreferrer noopener">
            <img src={icons.mailIcon} alt='mail' className="icon-img"/>
          </a>
          <a href="https://twitter.com/2dasu_" target="_blank" rel="noreferrer noopener">
            <img src={icons.twitterIcon} alt='twitter' className="icon-img"/>
          </a>
          <a href="https://www.pixiv.net/users/5238342" target="_blank" rel="noreferrer noopener">
            <img src={icons.pixivIcon} alt='pixiv' className="icon-img"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
