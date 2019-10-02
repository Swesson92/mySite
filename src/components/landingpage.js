import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import robins from './assets/robins.jpg';

class Landingpage extends Component{
    render(){
        return(
            <div className="landingpage">
            <Grid className="landing-grid">
            <Cell col={12}>
            <img 
            src={robins}
            alt="avatar"
            className="avatar-img"
             
            />
            <div className="banner-text">
            <h1>Web Developer</h1>

                <hr/>
                <p> JavaScript | React | Angular | Java | HTML / CSS </p>

                <div class="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/robin-svensson-4a0916165/" rel="noopener noreferrer"target="_blank">
                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                </a>

                {/* Github */}
                <a href="https://github.com/Swesson92" rel="noopener noreferrer"target="_blank">
                <i className="fa fa-github-square"  aria-hidden="true"/>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/swesson92/?hl=sv" rel="noopener noreferrer"target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"/>
                </a>
                </div>

                </div>
            </Cell>
            </Grid>
            </div>
        );
    }
}

export default Landingpage;