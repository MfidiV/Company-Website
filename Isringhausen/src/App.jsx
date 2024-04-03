import { useState } from 'react';
import React from 'react';
import './App.css';
import TopBar from './Components/Top_Bar/TopBar.jsx';
import Header from './Components/Header/Header.jsx';
import Home from './Sections/Home/Home.jsx';
import Profile from './Sections/Profile.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Contact from './Sections/Contact/Contact.jsx';
import Products from './Sections/Products/Products.jsx';



export default function App() {

  return (
    <div>
      <TopBar />
      <Header />
      <Home/>
      <Profile/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}
