import React from "react";
import "./Cart.css";
const Cart = ({cart}) => {
    // console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart ){
        totalPrice += product.price
        totalShipping += product.shipping
    }
    const tax = totalPrice * 7 / 100
    const grandTotal = totalPrice + totalShipping + tax

  return (
    <div className="cart">
      <h2>Odder Summary</h2>
      <p>Select Item {cart.length}</p>
      <p>Total Price : ${totalPrice} </p>
      <p>Total Shopping : {totalShipping} </p>
      <p>Tax : {tax.toFixed(2)}</p>
      <h6>Grand Total : {grandTotal} </h6>
    </div>
  );
};

export default Cart;
