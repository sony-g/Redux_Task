import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import User from './components/UsersList';
import { Container, Row, Col } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import Home from './components/home';
import UsersList from './components/UsersList';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import configureStore from './redux/store';

import {Provider} from 'react-redux';

const appStore = configureStore();
  

class App extends React.Component {


 


  render() {
    return (
        <Provider store={appStore}>
        <Router>
            <NavBar/>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/home" component={Home}/> */}
            <Route path="/userlist" component={UsersList}/>
            <Route path="/welcome" component={Welcome}/>
        </Router>
        </Provider>
    )


  }

}


export default () => (
  <div>
    <Router>
      <Route component={App} />
      {/* <Route component={User} /> */}
    </Router>
  </div>
);
