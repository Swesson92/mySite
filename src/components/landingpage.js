import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landingpage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img 
            src="https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Image.png"
            alt="avatar"
            className="avatar-img"
            />
            <div className="banner-text">
            <h1>Web Developer</h1>

                <hr/>
                <p> HTML/CSS | JavaScript | React | Angular | Java EE | SQL </p>

                <div class="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer"target="_blank">
                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer"target="_blank">
                <i className="fa fa-github-square"  aria-hidden="true"/>
                </a>

                {/* Instagram */}
                <a href="http://google.com" rel="noopener noreferrer"target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"/>
                </a>

                {/* Youtube */}
                <a href="http://google.com" rel="noopener noreferrer"target="_blank">
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