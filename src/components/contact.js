import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
            <Cell col={6}>
            <h2>Robin Svensson</h2>
            <img 
            src="https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Image.png"
            alt="avatar"
            style={{height: '250px'}}
            />
            <p style={{width: "75%" , margin: "auto", paddingTop: "1em" }}>
            Hello!
            <br></br>
            Please use some of these options to contact me. 
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