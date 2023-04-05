import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    savedCart.map(product => <ReviewItem product={product} key={product.id}></ReviewItem>)
                }
            </div>
            <div>
                <Cart cart={savedCart}></Cart>
                
            </div>
        </div>
    );
};

export default Order;