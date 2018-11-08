import React, { Component } from 'react';
import ProductImage from "./ProductImage";

import "./ChecklistCard.css";

const ChecklistCard = (props) => {
  return (
    <div className="checklist-card">
      <ProductImage
        imgSrc={props.imgSrc}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ChecklistCard;