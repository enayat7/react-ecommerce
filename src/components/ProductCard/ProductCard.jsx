import React from 'react';
import './ProductCard.css';
import { useAuth } from '../Context/AuthContext';

const ProductCard = ({brand, name, price, stock, thumbnail,discription,discountPercentage}) => {
  const {cartItem, setCartItem} = useAuth();

  const ItemsInCart=(item)=>{
    const Items =[...cartItem]
    const newItem = {
      price:item.discountPrice,
      name:item.name,
      thumbnail:item.thumbnail,
      quantity:1,
    }
    let present = 0;
    Items?.forEach((obj)=>{
      if(obj.name===newItem.name && obj.price===newItem.price){
        present=1;
      }
    })
    if(!present)
    Items.push(newItem)
    setCartItem(Items)
    // console.log(cartItem)
  }
  const discountPrice =Math.ceil(price*(100-discountPercentage)/100);
  return (
    <div className='product-card' >
      <img src={thumbnail} alt="" className="product-photo" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description"> {discription} </p>
        <div className="price-section">
          <span className="product-price"> ${discountPrice} </span>
          <span className="original-price">${price}</span>
          <span className="discount">{discountPercentage}%OFF</span>
        </div>
        <button className="add-to-cart-btn" onClick={() => ItemsInCart(
          {
            discountPrice,
            thumbnail,
            name
          }
        )}>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;
