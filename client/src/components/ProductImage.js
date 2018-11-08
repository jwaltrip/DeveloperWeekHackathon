import React from 'react';

const ProductImage = (props) => {
  return (
    <div>
      <img src={props.imgSrc} width={props.width} height={props.height} />
    </div>
  );
};

export default ProductImage;