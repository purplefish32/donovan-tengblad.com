import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-static'
import Gravatar from 'react-gravatar';
import Wrapper from './Wrapper';

function TopBar() {
  return(
    <Wrapper className="page-top clearfix" scroll-position="scrolled" max-height="50">
      <Link to="/" className="al-logo clearfix"><span>Blur</span>Admin</Link>
      <Link to="" className="collapse-menu-link ion-navicon"></Link>

      <div className="search">
        <i className="ion-ios-search-strong"></i>
        <input id="searchInput" type="text" placeholder="Search for..." />
      </div>

      <div className="user-profile clearfix">
        <div className="al-user-profile">
          <a className="profile-toggle-link">
            <Gravatar email="purplefish32@gmail.com" />
          </a>
          <ul  className="top-dropdown-menu profile-dropdown">
            <li><i className="dropdown-arr"></i></li>
            <li><Link to="/profile"><i className="fa fa-user"></i>Profile</Link></li>
            <li><Link to="/settings"><i className="fa fa-cog"></i>Settings</Link></li>
            <li><Link to="/signout" className="signout"><i className="fa fa-power-off"></i>Sign out</Link></li>
          </ul>
        </div>
        <msg-center></msg-center>
      </div>
    </Wrapper>
  )
}


export default TopBar;
