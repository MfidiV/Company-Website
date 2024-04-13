import React from "react";
import './ImageDetails.css'

const ImageDetails = ({ image }) => {
  return (
    <div className="image-details">
      <h3>Image Details</h3>
      <div>
        <img src={image.src} alt={image.alt} />
      </div>
      <div>
        <strong>Description:</strong> {image.desc}
      </div>
    
    </div>
  );
};

export default ImageDetails;
