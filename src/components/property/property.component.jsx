import React from "react";
import "./property.style.scss";

export const Property = props => (
  <div className="property">
    {
      (props.photos.length > 0) ?
      <img
        alt="property-photo"
        src={ `http://mr0.homeflow.co.uk/${ props.photos[0] }` } /> :
      null
    }
    {
      props.price ?
      <h1>£{ props.price }</h1> :
      null
    }
    <hr />
    {
      props.bedrooms ?
      <h3>
      {
        (props.bedrooms > 1) ?
        `${ props.bedrooms } bedrooms` :
        `${ props.bedrooms } bedroom`
      }
      </h3> :
      null
    }
    {
      props.address ?
      <p>{ props.address }</p> :
      null
    }
  </div>
);
