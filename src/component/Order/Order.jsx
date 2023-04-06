import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
const Order = () => {
  const savedCart = useLoaderData();
  console.log(savedCart);
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div>
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/proceedCheckout">
            <button className="btn-comn">Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
