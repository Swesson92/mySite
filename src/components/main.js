//Den klassen är för Routing. Vi importerar inte Component eftersom detta inte är en component class.
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Showflights from './showflights';
import Weatherservice from './weather/weatherservice';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/> 
        <Route path="/showflights" component={Showflights}/>
        <Route path="/weather" component={Weatherservice}/>
    </Switch>
)
export default Main;
