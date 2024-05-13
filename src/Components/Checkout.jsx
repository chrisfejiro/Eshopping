import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvision/StateProvider'


const Checkout = () => {
  const [{basket},dispatch]=useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="src\assets\8.jpg" alt="" className="checkout__ad" />
           <div>    
            <h2 className="checkout__title"> Your Shopping Basket</h2>
            {
            basket.map((item,index) => (
            <CheckoutProduct 
             key={index}
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
            />
            ))
            }
           </div>
       </div>
        <div className="checkout__right"> 
        <Subtotal />
       </div>
    </div>
  )
}

export default Checkout