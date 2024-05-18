import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../EventsPage/events_page.css'; // Import CSS file for component-specific styles
import TopBar from '../../Components/Top_Bar/TopBar';

function EventsPage() {
  const location = useLocation();
  const { state } = location;
  const { image } = state || {};

  return (
    <section className="Eventspage">
      <div className="container1">
        <TopBar/>
        <div className="breadcrumbs">
          <Link to="/" className="back-to-home">Back to Home</Link>
          <span className="separator"> / </span>
          <Link to="/eventsPage" className="breadcrumb-link">Events Page</Link>
        </div>
        {image ? (
          <div>
            <p className="desc">{image.desc}</p>
            <img src={image.src} alt={image.alt} className="selected-image" />
            
          </div>
        ) : (
          <p className="message"><strong>More details about the selected image will be available here in the future. Stay tuned!</strong></p>
        )}
      </div>
    </section>
  );
}

export default EventsPage;
