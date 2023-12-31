import React, { useEffect } from 'react'
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import "./Cart.css"
import Icon from "react-crud-icons";
// import "react-crud-icons/dist/react-crud-icons.css";


const  CartHandle = ({name, price,thumbnail,handleIncrement,handleDecrement,removeFromCart,index, quantity}) =>{

  return (
    <div className="product-container">
    <span className="product-image-container">
      <img
        src={thumbnail}
        alt="Product"
        className="product-image"
      />
    </span>
    <div className="product-details">
      <p>{name}</p>
      <p>${price}</p>
      <div className="quantity-controls">
        <button onClick={() =>{ handleDecrement(index)} }>-</button>
        <span >{quantity}</span>
        <button onClick={() => {handleIncrement(index)} }>+</button>
        <Icon
            name="delete"
            tooltip="delete"
            theme="light"
            size="small"
            onClick={() =>{
                removeFromCart(index)
            }}
        />
      </div>

    </div>

  </div>
  )
}

export default CartHandle