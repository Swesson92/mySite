import React from 'react'

import './Toolbar.css'
import Togglebutton from '../SideDrawer/ToggleButton';
import Main from '../main';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
    <div className="toolbar__toggle-button">
            <Togglebutton click={props.drawerClickHandler} />
        </div>
      <div />
      <div className="toolbar__logo">
        <a href="/">Robin Svensson</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/aboutme">Login</a>
            <a href="/weather">Live Weather</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
        </ul>
        <Main/>
      </div>
    </nav>
  </header>
)

export default toolbar