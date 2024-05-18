import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../EventsPage/events_page.css';
import TopBar from '../../Components/Top_Bar/TopBar';

function EventsPage() {
  const location = useLocation();
  const { state } = location;
  const { image } = state || {};

  return (
    <section className="Eventspage">
      <div className="container1">
        <TopBar />
        <div className="breadcrumbs">
          <Link to="/" className="back-to-home">Back to Home</Link>
          <span className="separator"> / </span>
          <Link to="/eventsPage" className="breadcrumb-link">Events Page</Link>
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
    </section>
  );
}

export default EventsPage;
