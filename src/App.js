import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css'


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      title: 'Robin Svensson',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Title Text',
        subTitle: 'This is subtitle',
        text: 'Just text'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
     <Router>
       <Container className="p-0" fluid={true}>
       <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Navbar.Brand>
          Robin Svensson
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
       </Container>
     </Router>
      );
    }
  }
export default App;