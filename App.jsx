import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import { NavbarHome,Login,SignUp,Home, SearchFeed, VideoDetail, ChannelDetail } from './components';

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor='#adb8b0' highlightColor='grey'>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
