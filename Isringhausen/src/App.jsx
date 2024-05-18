import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import TopBar from './Components/Top_Bar/TopBar.jsx';
import Header from './Components/Header/Header.jsx';
import Home from './Sections/Home/Home.jsx';
import Profile from './Sections/Profile.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Contact from './Sections/Contact/Contact.jsx';
import Products from './Sections/Products/Products.jsx';
import EventsPage from './Sections/Products/EventsPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
  
          <Route exact path="/" element={<HomePage />} />
          <Route path="/eventsPage" element={<EventsPage />} />
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
