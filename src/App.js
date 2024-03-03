
import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';
import NewsInfinteScrollCompnant from './componants/NewsInfineScrollComp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  state = {
    progress: 100,
    apiKey: process.env.REACT_APP_API_KEY
  }

  setProgress = (progress) => {
    this.progress = progress    
  }
  render() {
    document.body.style.background = "grey";
    // console.log("this.state.apiKey", this.state.apiKey)
    // const [progress, setProgress] =useState(0)
    return (
      <>

        <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Router>
          <Navbar />
          <Routes>
            <Route path="" element={<NewsInfinteScrollCompnant setProgress={this.setProgress} pagesize="5" country="in" category="general" key="general" apiKey={this.state.apiKey} />} />
            <Route path="business" element={<News pagesize="50" country="in" category="business" key="business" apiKey={this.state.apiKey} />} />
            <Route path="entertainment" element={<News pagesize="5" country="in" category="entertainment" key="entertainment" apiKey={this.state.apiKey} />} />
            <Route path="health" element={<News pagesize="5" country="in" category="health" key="health" apiKey={this.state.apiKey} />} />
            <Route path="science" element={<News pagesize="5" country="in" category="science" key="science" apiKey={this.state.apiKey} />} />
            <Route path="sports" element={<News pagesize="5" country="in" category="sports" key="sports" apiKey={this.state.apiKey} />} />
            <Route path="technology" element={<News pagesize="5" country="in" category="technology" key="technology" apiKey={this.state.apiKey} />} />
          </Routes>
        </Router>
      </>
    )
  }
}
