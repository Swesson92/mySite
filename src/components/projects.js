import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton} from 'react-mdl';


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
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>My React Project</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
    <Button colored>Github</Button>
    <Button colored>Live Demo</Button>
    <Button colored>Share</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
</Card>
<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>My React Project</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
    <Button colored>Github</Button>
    <Button colored>Live Demo</Button>
    <Button colored>Share</Button>
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
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(http://www.zelearner.com/wp-content/uploads/2015/02/angular-825x510.png) center / cover'}}>CRG Client</CardTitle>
                    <CardText>
                    Five unemployed dudes with one given goal, one destination, 
                    to create a community for devoted video-game admirers to share their their thoughts and opinions. 
                    This quest meant a long distance from society and human interraction, but since none of them were familiar with it anyway they took their equipment and settled in a deep dark dungeon in the dank forest of Scandanavia. 
                    ....legend says that they are stil in that dungeon
                    </CardText>
                    <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>Live Demo</Button>
                    <Button colored>Share</Button>
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
                    <Button colored>Github</Button>
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