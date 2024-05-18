import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SelectedImage.css'
import TopBar from '../Components/Top_Bar/TopBar';

function SelectedImage() {
  const location = useLocation();
  const { state } = location;
  const { image } = state || {};

  return (
    <section className="Eventspage">
      <TopBar />
      <div className="container1">
        
        <div className="breadcrumbs">
          <Link to="/" className="back-to-home">Back to Home</Link>
          <span className="separator"> / </span>
          <Link to="/SelectedImage" className="breadcrumb-link">Selected Image</Link>
        </div>
        {image ? (
          <div className='ImageSelected'>
            <p className="desc1">{image.desc}</p>
            <div className="image-container">   
              <div className='image-property'>
                <img src={image.src} alt={image.alt} className="selected-image" />
                <button className='Diagram'>View Diagram</button>
              </div>
              <div className="details">
                <h3>Applications</h3>
                <ul>
                  {image.applications.map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
                <h3>Features</h3>
                <ul>
                  {image.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3>Options</h3>
                <ul>
                  {image.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <p className="message"><strong>More details about the selected image will be available here in the future. Stay tuned!</strong></p>
        )}
      </div>
      <div
        className=" m-2 text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright -  
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
           Mfidi Vuyolwethu
        </a>
      </div>
    </section>
  );
}

export default SelectedImage;
