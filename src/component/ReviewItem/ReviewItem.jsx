import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product }) => {
  const { id, name, price, quantity, img } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price: <span className="orang-text">{price}</span>
        </p>
        <p>
          Oder Quantity: <span className="orang-text">{quantity}</span>{" "}
        </p>
      </div>
      <button className="btn-delete">
        <FontAwesomeIcon className="delete-icon" icon={faTrash } />
      </button>
    </div>
  );
};

export default ReviewItem;
