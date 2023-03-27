import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  return (
    <div className="product">
        <img src={img?img : "Img Not Found"} alt="" />
        <h6>{name}</h6>
    </div>
  )
};

export default Product;
