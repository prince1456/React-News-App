import React, { Component } from 'react';
import injecttapEventPlugin from 'react-tap-event-plugin'
import Header from '../Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BbcNews from "../News/Bbc/BbcNews"
import CnnNews from "../News/Cnn/CnnNews"
import CardNews from "../News/Cnn/CardNews"


injecttapEventPlugin();

class MainApp extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header/>
            <Route exact path = '/' component={BbcNews}/>
            <Route path = '/Component/News/Cnn/CnnNews' component={CnnNews}/>
            <Route path = '/Component/News/Cnn/CardNews/:title/:author/:description' component={CardNews}/>
            {/* <CardNews/> */}
            {/* <BbcNews/> */}
            {/* <CnnNews/> */}
        </div>
      </Router>
    );
  }
}

export default MainApp;
