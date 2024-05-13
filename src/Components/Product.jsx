import React from 'react'
import "./Product.css"
import { useStateValue } from '../StateProvision/StateProvider'
const Product = ({id,title,image,price,rating}) => {
    const[state,dispatch]=useStateValue();
    //dispatch is like an alternative name for action
    const addToBasket =() =>{
        dispatch({
            type:"Add_To_Basket",//This is the name i want to give my function for manipulative purpose 
        item:{
             id:id,
            image:image,
            price:price,
            rating :rating
         },//This is the data I want to send to the state provider
        });
    };
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((star,i)=>(
                        <span key={i}>⭐</span>
                        
                    ))}
                   </div>
            </div>
            <img src={image} alt="product-image" />
            <button onClick={addToBasket}>Add to Basket </button>
        </div>
    </div>
  )
}

export default Product