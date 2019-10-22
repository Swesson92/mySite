import React, {Component} from 'react';
import {Layout, Header, Navigation} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import './App.css';
import ToggleButton from './components/SideDrawer/ToggleButton';


class App extends Component {
  render() {
  return (  
    <div className="demo-big-content">
        <Layout>
        <Header className="header-color" title={<span><ToggleButton/></span>}>
        <a href="/" rel="noopener noreferrer">
                <i className="fa fa-code" />
                </a>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                <Link to ="/weather">Live Weather</Link>
                <Link to ="/aboutme">Log in</Link>
            </Navigation>
        </Header>
            <Main/>
    </Layout>
</div>
        );
    }
}
export default App;
