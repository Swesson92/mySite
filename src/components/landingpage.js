import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import robbans from './assets/robbans.jpg'



class Landingpage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img 
            src={robbans}
            alt="avatar"
            className="avatar-img"
             
            />
            <div className="banner-text">
            <h1>Web Developer</h1>

                <hr/>
                <p> HTML / CSS | JavaScript | React | Angular | Java EE | SQL </p>

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

                {/* Youtube */}
                <a href="https://www.youtube.com/channel/UCBytif0ryd8uYAs_y8KCUgQ?view_as=subscriber" rel="noopener noreferrer"target="_blank">
                <i className="fa fa-youtube-square"  aria-hidden="true"/>
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