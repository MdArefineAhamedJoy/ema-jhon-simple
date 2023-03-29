import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb , getShoppingCart} from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([])
    const [cart , setCart] = useState([])
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
      }
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storeCart = getShoppingCart()
        const savedCart = [];
        // step : 1 get id add product 
        for(const id in storeCart){
            // get products by product using id 
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // step : 3 add quantity
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }

        }
        setCart(savedCart)
    },[products])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product product = {product} key = {product.id} handleAddToCart ={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;