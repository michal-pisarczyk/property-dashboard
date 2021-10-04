import React from "react";
import "./property-list.style.scss";
import { Property } from "../property/property.component";

export const PropertyList = props => (
  <div className="property-list">
    {
      props.properties.map(property => (
        <Property
          key={ property.property_id }
          photos={ property.photos }
          price={ property.price_value }
          bedrooms={ property.bedrooms }
          address={ property.display_address } />
      ))
    }
  </div>
);
