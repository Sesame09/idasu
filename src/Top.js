import React from "react";
import { Link } from "react-router-dom";
import './Top.css';
import Logo from './assets/icons/idasu_logo.svg';
import Menu from './assets/icons/menu.svg';

function Top({ onMenuButtonClick }) {

  return (
    <div className="Top">
      <div className="top-logo">
        <Link to="/">
          <img src={Logo} alt='main' className="top-logo-img"/>
        </Link>
      </div>
      <div></div>
      <button onClick={onMenuButtonClick} className="menu-button">
        <img src={Menu} alt='menu' className="menu-img"/>
      </button>
    </div>
  );

};


export default Top;
