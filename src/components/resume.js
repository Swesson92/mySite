import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img 
            src="https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Image.png"
            alt="avatar"
            style={{height: '200px'}} />
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Robin Svensson</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>Right side</Cell>

                </Grid>
            </div>
        );
    }
}
 
export default Resume;