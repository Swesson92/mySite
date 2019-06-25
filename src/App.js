import React, {Component} from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<span><span style={{ color: '#ddd' }}> </span>Robin Svensson</span>}>
        {/* code */}
        <a href="/" rel="noopener noreferrer">
                <i className="fa fa-code" />
                </a>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}
}
export default App;
