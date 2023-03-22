import React, { useState } from 'react'
import '../styles/cart.css'
import { useContext } from "react";
import {DataAppContext} from './Context'
function Cart(props) {

  const cart = useContext(DataAppContext)
  const {cartData,setCartData,lth,setlth,total,settotal,loginStaus} =cart

  const[cartcount,setCartCount] =useState(1)
  const[cartprice,setcartprice] =useState(props.price)
  return (
    <>
 
    {cartData&&
  <div className="cartk">

  
    <div className="cart_left">
        <div className="cart_img">
            <img src={props.img} alt="" height={100}/>
        </div>
        <div className='cart-text'>
        <p>{props.name}</p>
        <p>₹ {cartprice}</p>
      {props.img &&<button onClick={()=>{
   
       let x= cartData
       x.splice(props.id,1)
       if(lth>0){
        setlth(lth-1)
       }
     
      localStorage.setItem('products',JSON.stringify(x))
      props.setbeta(!props.beta)
      settotal(total-props.price)   
        }}>X Remove</button>} 

          {props.img && <div>
            <button onClick={()=>{
              if(cartcount>1){
                setCartCount(cartcount-1)
                setcartprice(cartprice-props.price)
                settotal(total-props.price)
              }
              else{
                let x= cartData
                x.splice(props.id,1)
                setlth(lth-1)
               localStorage.setItem('products',JSON.stringify(x))
               props.setbeta(!props.beta)
         
              }
            }}>-</button>
          <button>{cartcount}</button>
            <button onClick={()=>{
              setCartCount(cartcount+1)
              setcartprice(cartprice+props.price)
              settotal(total+props.price)
            }}>+</button>
          </div> }    
    </div>
    </div>

  </div>
      }

      
      </>
  )
}

export default Cart