import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart, handleClearCart,  children}) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping * product.quantity;
    quantity += product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h2>Odder Summary</h2>
      <p>Select Item {quantity}</p>
      <p>Total Price : ${totalPrice} </p>
      <p>Total Shopping : {totalShipping} </p>
      <p>Tax : {tax.toFixed(2)}</p>
      <h6>Grand Total : {grandTotal} </h6>
      <button onClick={handleClearCart} className="clear-btn">
        Clear Cart
        <FontAwesomeIcon className="clear-icon" icon={faTrash} />
      </button>
      <div className="children-btn">
        {children}
      </div>
    </div>
  );
};

export default Cart;
