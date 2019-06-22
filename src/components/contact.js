import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import robins from './assets/robins.jpg'


class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
            <h2>Robin Svensson</h2>
            <img 
            src={robins}
            alt="avatar"
            style={{height: '250px'}}
            />
            <p style={{width: "75%" , margin: "auto", paddingTop: "1em" }}>
            Hello there! 
            <br></br>
            My name is Robin and I am a newly educated Java/Web Devevloper, still looking for a future job.
            I am 27 years old and live in Sweden. Beside programming, I am a big fan of Hockey, Football and Travel.
            <br></br>
            If you find this website or me interesting, please contact me through any of the options to the right. 
            </p>
            </Cell>
            <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

        <div className="contact-list">

            <List>
                <ListItem>
                    <ListItemContent style={{fontSize: "25px", color: "white",  fontFamily: 'Oxygen'}}>
                    <i className="fa fa-phone" aria-hidden="true"/>
                    0706-583177
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style={{fontSize: "25px", color: "white", fontFamily: 'Oxygen'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    robin.svensson06@gmail.com
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style={{fontSize: "25px", color: "white", fontFamily: 'Oxygen'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    Robin Svensson | LinkedIn
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style={{fontSize: "25px", color: "white", fontFamily: 'Oxygen'}}>
                    <i className="fa fa-slack" aria-hidden="true"/>
                    swesson92@gmail.com | Robin
                    </ListItemContent>
                </ListItem>
            </List>
            </div>


            </Cell>
            </Grid>
               
        </div>
        );
    }
}

export default Contact;