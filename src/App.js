
import './App.css';

import React, {useState } from 'react'
import Navbar from './componants/Navbar';
import News from './componants/News';
import NewsInfinteScrollCompnant from './componants/NewsInfineScrollComp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {    
  const page_size=25
  document.body.style.background = "grey";
    
  const apiKey= process.env.REACT_APP_API_KEY
  const [progress, setProgress]= useState(100)    
    return (
      <>

        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Router>
          <Navbar />
          <Routes>
            <Route path="" element={<NewsInfinteScrollCompnant setProgress={setProgress} pagesize={page_size} country="in" category="general" key="general" apiKey={apiKey} />} />
            <Route path="business" element={<News pagesize="50" country="in" category="business" key="business" apiKey={apiKey} />} />
            <Route path="entertainment" element={<News pagesize={page_size} country="in" category="entertainment" key="entertainment" apiKey={apiKey} />} />
            <Route path="health" element={<News pagesize={page_size} country="in" category="health" key="health" apiKey={apiKey} />} />
            <Route path="science" element={<News pagesize={page_size} country="in" category="science" key="science" apiKey={apiKey} />} />
            <Route path="sports" element={<News pagesize={page_size} country="in" category="sports" key="sports" apiKey={apiKey} />} />
            <Route path="technology" element={<News pagesize={page_size} country="in" category="technology" key="technology" apiKey={apiKey} />} />
          </Routes>
        </Router>
      </>
    )
  
}


export default App;