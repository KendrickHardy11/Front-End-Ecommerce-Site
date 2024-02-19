import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext.jsx"
import "./Shop.css"

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <img className="prodImage" src={productImage}/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}> 
            Add To Bag {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
        </div>
    );
}