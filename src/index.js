
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Contact';
import Content from './Content';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


const routing = (
    <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/content">Content</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/content" component={Content} />
        <Route path="/contact" component={Contact} />
    </Switch>
      </div>
    </Router>
  )

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();