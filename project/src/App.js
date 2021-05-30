import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nevbar from './Nevbar';


const App = () => {
  return (<>
    <Nevbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/service" component={Service} />
      <Redirect to='/' />
    </Switch>
    <div class="footer">
      <p>© 2020 Copyright React project</p>
    </div>

  </>);
}

export default App;
