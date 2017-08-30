import React, { Component } from 'react';
import injecttapEventPlugin from 'react-tap-event-plugin'
import Header from '../Header/Header'
import BbcNews from "../News/BbcNews"
import CnnNews from "../News/CnnNews"


injecttapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          {/* <BbcNews/> */}
          <CnnNews/>
      </div>
    );
  }
}

export default App;
