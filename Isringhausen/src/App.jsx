import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import TopBar from './Components/Top_Bar/TopBar.jsx';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home.jsx';
import Profile from './Components/Profile.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Contact from './Components/Contact.jsx';
import Products from './Components/Products.jsx';
import SelectedImage from './Sections/SelectedImage.jsx' 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
  
          <Route exact path="/" element={<HomePage />} />
          <Route path="/SelectedImage" element={<SelectedImage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Define a separate component for the home page that renders both Profile and Products
const HomePage = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <Home/>
      <Profile />
      <Products />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
