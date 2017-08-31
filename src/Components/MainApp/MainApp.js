import React, { Component } from 'react';
import injecttapEventPlugin from 'react-tap-event-plugin'
import Header from '../Header/Header'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {Switch} from 'react-router'
import BbcNews from "../News/BbcNews"
import Aljazira from "../News/Aljazira"
import Telegraph from "../News/Telegraph"
import Usatoday from "../News/Usatoday"
import Times from "../News/Times"
import CnnNews from "../News/CnnNews"
import Cardss from "../News/Cardss"


injecttapEventPlugin();

class MainApp extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header/>
            <Switch>
            <Route exact path = '/' component={BbcNews}/>
            <Route path = '/Components/News/CnnNews' component={CnnNews}/>
            <Route path = '/Components/News/Aljazira' component={Aljazira}/>
            <Route path = '/Components/News/Telegraph' component={Telegraph}/>
            <Route path = '/Components/News/Usatoday' component={Usatoday}/>
            <Route path = '/Components/News/Times' component={Times}/>
            <Route path = '/:title/:author/:description/:image/:publishedAt' component={ Cardss } />
            <Route render={() => {
              return <p>Not found</p>
            }} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default MainApp;
