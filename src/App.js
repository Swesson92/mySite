import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

     </Router>
      );
    }
  }
export default App;