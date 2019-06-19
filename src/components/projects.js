import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, IconButton} from 'react-mdl';


class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};

        }

        toggleCatogories(){
            if(this.state.activeTab === 0){
                return(
            <div className="projects-grid">
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>TicTacToe</CardTitle>
    <CardText>
     A project to learn to code in React framework. Simple TicTacToe game with some fun functions.
    </CardText>
    <CardActions border>
    <div className="gittis">
        <a href="https://github.com/Swesson92/LearningReact" rel="noopener noreferrer"target="_blank">
            <i className="fa fa-github-square"  aria-hidden="true"/>
        </a>
    </div>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
</Card>
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Website about me</CardTitle>
    <CardText>
        Building a website in React to learn further about the framework. The idea with this project is to continue implement functions and different things to do on the site.
    </CardText>
    <CardActions border>
    <div className="gittis">
        <a href="https://github.com/Swesson92/mySite" rel="noopener noreferrer"target="_blank">
            <i className="fa fa-github-square"  aria-hidden="true"/>
        </a>
    </div>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
</Card>
</div>
                    
                )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-angular">
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '210px', background: 'url(http://www.zelearner.com/wp-content/uploads/2015/02/angular-825x510.png) center / cover'}}>CRG Client</CardTitle>
                    <CardText>
                    Client for CRG project. Built with Angular 7 and connected to a backend written in Java. This client contains things like Localstorage, Sessionstorage, Errorhandling and more, along with REST calls to backend for information/rating about games saved in the database.
                    </CardText>
                    <CardActions border>
            <div className="gittis">
                    <a href="https://github.com/ArastoSahbaei/CommunityRatesGames/tree/development/client" rel="noopener noreferrer"target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true"/>
                    </a>
                </div>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-java">
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://study.com/cimages/videopreview/videopreview-full/059tmsbnjx.jpg) center / cover'}}>CRG Java</CardTitle>
                    <CardText>
                    Five unemployed dudes with one given goal, one destination, 
                    to create a community for devoted video-game admirers to share their their thoughts and opinions. 
                    This quest meant a long distance from society and human interraction, but since none of them were familiar with it anyway they took their equipment and settled in a deep dark dungeon in the dank forest of Scandanavia. 
                    ....legend says that they are stil in that dungeon
                    </CardText>
                    <CardActions border>
                    <div className="gittis">
                    <a href="https://github.com/ArastoSahbaei/CommunityRatesGames" rel="noopener noreferrer"target="_blank">
                        <i className="fa fa-github-square"  aria-hidden="true"/>
                    </a>
                </div>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return (
            <div><h1>This is SQL</h1></div>
            )
        }
    
    }
    render(){
        return(
            <div className="category-tabs">

            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>Angular</Tab>
            <Tab>Java</Tab>
            <Tab>SQL</Tab>
            </Tabs>

            
            <Grid>
            <Cell col="12"></Cell>
            </Grid>
            <div>{this.toggleCatogories()}
            </div>
           
              
            </div>
        );
    }
}

export default Projects;