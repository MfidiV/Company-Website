import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../EventsPage/events_page.css'; // Import CSS file for component-specific styles
import TopBar from '../../Components/Top_Bar/TopBar';

function EventsPage() {
  const location = useLocation();

  // Extract the pathname from the current location
  const pathname = location.pathname;

  // Split the pathname into an array of segments
  const segments = pathname.split('/').filter(segment => segment !== '');

  return (
    <section className="Eventspage">
      <div className="container1">
        <TopBar/>
        <div className="breadcrumbs">
          <Link to="/" className="back-to-home">Back to Home</Link>
          {segments.map((segment, index) => (
            <React.Fragment key={index}>
              <span className="separator"> / </span>
              <Link to={`/${segment}`} className="breadcrumb-link">{segment}</Link>
            </React.Fragment>
          ))}
        </div>
        <h1>Events Page</h1>
        <p className="message">More details about the selected image <br/>will be available here in the future. Stay tuned!</p>
      </div>
    </section>
  );
}

export default EventsPage;
