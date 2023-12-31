import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import CartHandle from './CartHandle';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';


export default function Cart() {

    const { cartItem, setCartItem,} = useAuth();
    let InitialPrice=0;
    cartItem.forEach(element => {
      InitialPrice+=element.price;
    });

    const [totalPrice ,setTotalPrice] = useState(InitialPrice);

    const handleIncrement = (index) => {
      let newproductlist = [...cartItem];
      let newtotalAmount = totalPrice;
      newtotalAmount += cartItem[index].price;
      newproductlist[index].quantity++;
      setCartItem(newproductlist);
      setTotalPrice(newtotalAmount);
    };

    const handleDecrement = (index) => {
      let newproductlist = [...cartItem];
      if (newproductlist[index].quantity >1) {
        let newtotalAmount = totalPrice;
        newtotalAmount -= newproductlist[index].price;
        newproductlist[index].quantity--;
        setCartItem(newproductlist);
        setTotalPrice(newtotalAmount);
      }
    };

    const removeFromCart = (index) =>{
        let newproductlist = [...cartItem]

        let newtotalAmount = totalPrice;
        newtotalAmount -= cartItem[index].price*cartItem[index].quantity;
        newproductlist.splice(index, 1);
        
        console.log(newproductlist)
        setCartItem(newproductlist);
        setTotalPrice(newtotalAmount);
    };

  return (
    <div>
      <div>
      {cartItem?.map((element, i) => (
          <CartHandle
          key={Date.now()+element.thumbnail}
          quantity = {element.quantity}
          index = {i}
          name = {element.name}
          price = {element.price}
          thumbnail = {element.thumbnail}
          handleIncrement = {handleIncrement}
          handleDecrement={handleDecrement}
          removeFromCart = {removeFromCart}
          />
        ))}
      </div>
      <footer className="footer">TotalPrice ${totalPrice} </footer>
    </div>
  )
}

