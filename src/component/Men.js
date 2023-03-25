import React from 'react'
import { useContext } from "react";
import {DataAppContext} from './Context'
import Item from './Item';
import {Link} from 'react-router-dom'
import Login from './Login'
function Men() {
    const cart = useContext(DataAppContext)
    const {glcontext,loginStaus} =cart
      
      let dta =  glcontext.filter((item)=>{
          return item.title.includes("Mens")
         })
   
  return (
    <>
    {loginStaus ? <div className="itemlist-container">   {
        dta && dta.map((item,) => (
        
          <Link to={`/product/${item.id}`} style={{textDecoration: 'none'}}  >
          <div className="listitem">
           
          <Item   img={item.image} name={item.title} price={item.price} rating ={item.rating}/>
  
        </div>
        </Link>
        ))
    }</div>:<Login/>}
   
    </>
  )
}

export default Men