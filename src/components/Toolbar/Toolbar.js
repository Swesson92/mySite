import React from 'react';
import {Link} from 'react-router-dom';


const toolbar = props => (
    <header>
        <nav>
            <div></div>
            <div><a href="/">LOGO</a></div>
            <div>
                <ul>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                <Link to ="/weather">Live Weather</Link>
                <Link to ="/aboutme">Log in</Link>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;