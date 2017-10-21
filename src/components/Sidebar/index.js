import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-static'
import Wrapper from './Wrapper';

function Sidebar() {
  return(
    <Wrapper>
      <ul className="al-sidebar-list">
        <li className="al-sidebar-list-item">
          <Link to="/">
            <i className="ion-android-home"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="al-sidebar-list-item">
          <Link to="/blog">
            <i className="ion-android-home"></i>
            <span>Blog</span>
          </Link>
        </li>
        <li className="al-sidebar-list-item with-sub-menu ba-sidebar-item-expanded">
          <a className="al-sidebar-list-link">
            <i className="ion-gear-a"></i>
            <span>Components</span>
            <b className="fa fa-angle-down" ></b>
          </a>
          <ul className="al-sidebar-sublist">
            <li className="ba-sidebar-sublist-item">
              <Link to="/components/buttons">Buttons</Link>
            </li>
          </ul>
        </li>
        <li className="al-sidebar-list-item with-sub-menu">
          <a className="al-sidebar-list-link">
            <i className="ion-stats-bars"></i>
            <span>Charts</span>
            <b className="fa fa-angle-down"></b>
          </a>
          <ul className="al-sidebar-sublist">
            <li className="ba-sidebar-sublist-item">
              <Link to="/components/charts">Charts</Link>
            </li>
          </ul>
        </li>
      </ul>
    </Wrapper>
  )
}


export default Sidebar;
