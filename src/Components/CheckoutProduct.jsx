import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../StateProvision/StateProvider'

const CheckoutProduct = ({id,title,price,image,rating}) => {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket =() =>{
        dispatch({
            type:"Remove_From_Basket",
            Id:id,
        })
    }
  return (
    <div>
        <div className="checkoutProduct">
        <img src={image} alt="checkoutproduct__image" className="checkoutproduct__image" />
            <div className="checkoutproduct__info">
                <p className='checkoutProduct__Title'>{title}</p>
                <p className="CheckoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {Array(rating).fill().map((star,i)=>(
                        < span key={i}>⭐</span>
                        
                    ))}
                   </div>
                   <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct