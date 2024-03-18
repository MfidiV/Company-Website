import { useState } from 'react'
import './App.css'
import TopBar from './Components/Top_Bar/TopBar.jsx'
import Header from './Components/Header/Header.jsx'
import Home from './Sections/Home/Home.jsx';
import Profile from './Sections/Profile.jsx';

function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <Home/>
      <Profile/>
    </div>
  );
}

export default App;