import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">Robin Svensson</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/Content">Content</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;