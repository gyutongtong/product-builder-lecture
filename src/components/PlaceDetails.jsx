import React from 'react';
import './PlaceDetails.css';

const PlaceDetails = ({ place, onClose }) => {
  return (
    <div className="place-details">
      <div className="header">
        <h2>{place.name}</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div className="content">
        {place.details.map(detail => (
          <div key={detail.id} className="post">
            <img src={detail.image} alt={detail.name} />
            <h3>{detail.name}</h3>
            <p>{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceDetails;
