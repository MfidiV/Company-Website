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
import Services from './Sections/Services/Services.jsx'; // Make sure to create this component
import Content from './Sections/Blogs-Events/Content.jsx'; // Make sure to create this component
import SelectedImage from './Sections/SelectedImage.jsx';

function App() {
  return (
    <BrowserRouter>
    
      <div>
      
        <Routes>
          <Route exact path="" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/content" element={<Content />} />
          <Route path="/SelectedImage" element={<SelectedImage />} />
          <Route path="*" element={<NotFound />} /> {/* Optional: handle 404 errors */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Define a separate component for the home page that renders both Profile and Products
const HomePage = () => {
  return (
    <div>
     <TopBar />
      <Header/>
      <Home />
      <Profile />
      <Products />
      <Contact />
      <Footer/>
    </div>
  );
};

// Optional: Define a NotFound component for handling 404 errors
const NotFound = () => {
  return <div>Page Not Found</div>;
};

export default App;
