import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Content from './components/pages/Content';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';


function App(){
  return(
  <>

    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component = {Home} />
      <Route path='/content' exact component = {Content} />
      <Route path='/about' exact component = {About} />
      <Route path='/sign-up' exact component = {SignUp} />
    </Switch>
    </Router>
    </>
  );
}


export  default App;