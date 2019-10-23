import React from 'react'
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
      drawerClasses = 'side-drawer open'
    }
    return (
      <nav className={drawerClasses}>
        <ul>
        <li>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/aboutme">Login</a>
            <a href="/weather">Live Weather</a>
          </li>
        </ul>
      </nav>
    )
  }

export default SideDrawer;