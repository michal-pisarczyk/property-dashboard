import React from "react";
import "./property-list.style.scss";

export const PropertyList = props => (
  <div className="property-list">
    {
      props.properties.map(property => (
        <div key={ property.property_id } className="property">
          <img
            alt="property-photo"
            src={ `http://mr0.homeflow.co.uk/${ property.photos[0] }` } />
          <h1>£{ property.price_value }</h1>
          <hr />
          {
            property.bedrooms ?
            <h3>
            {
              (property.bedrooms > 1) ?
              `${ property.bedrooms } bedrooms` :
              `${ property.bedrooms } bedroom`
            }
            </h3> : null
          }
          <p>{ property.display_address }</p>
        </div>
      ))
    }
  </div>
);
