import React, { useEffect, useState } from 'react'
import Item from './Item'
import '../styles/ItemList.css'
import{Link}from 'react-router-dom'
import DownloadPAge from './DownloadPAge.js'
import { useContext } from "react";
import {DataAppContext} from './Context'
import Login from './Login'
function ItemList() {
  const cart = useContext(DataAppContext)
  const {cartData,setCartData,loginStaus, setLoginStatus} =cart
  const [products, setProducts] = useState([]);

  const callApi = async() => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
    
      setProducts(data);
  }
  useEffect(() => {
      callApi();
  }, [])
  return (
     <>
     <DownloadPAge/>
     {loginStaus ?     
  <div className="itemlist-container">
               
              {
                  products && products.map((item, index) => (
                  
                    <Link to={`/product/${item.id}`} style={{textDecoration: 'none'}}  >
                    <div className="listitem">
                     
                    <Item   img={item.image} name={item.title} price={item.price} rating ={item.rating}/>
            
                  </div>
                  </Link>
                  ))
              }
              </div>:<Login/>}
  
           
     </>
  )
}

export default ItemList