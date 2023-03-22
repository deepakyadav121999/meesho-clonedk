
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ItemDescription.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import {DataAppContext} from './Context'
import StarIcon from '@mui/icons-material/Star';


function ItemDescription() {
const cart = useContext(DataAppContext)
const {cartData,setCartData,lth,setlth,total,settotal} =cart
  const temp = useParams();


  const [product, setProduct] = useState({});


  const callApi = async(productId) => {
      const response = await fetch('https://fakestoreapi.com/products/'+productId)
      const data = await response.json();
  
      setProduct(data);
    
  }

  useEffect(() => {
   
      callApi(temp.id);
   
      

     
  },[temp.id])
 

  return (
      <div className='itemdiscription'>
          <div className="left_discription">
            <img src={product.image} className='product_image'/>
            <br />
               <button className='left_discription_button' onClick={()=>{
                
                let oldproducts = JSON.parse(localStorage.getItem('products'))||[]
                localStorage.setItem('products',JSON.stringify([...oldproducts,product]))
               
              
                setlth(lth+1)
                 settotal(total+product.price)
                 
                }}><AddShoppingCartIcon  className='spnprdbtn'/><span>Add To Cart</span></button>
                
          </div>
          <div className="right_discription">
            <div className='product_heading'>
                <p> {product.title}</p>
                <p>₹ {product.price}</p>
                <p className='rate'>{product.rating && product.rating.rate}<StarIcon/></p>
                <p className='item_count'>{product.rating && product.rating.count} pices left</p>
            </div>
            <div className='product_size'>
                <p>Select Size</p>
                <button >Free Size</button>
    
            </div>
            <div className='product_details'>
                <p>Product Details</p>
                <p>Name: {product.title}</p>
                  <p>{product.description}</p>
            </div>
          </div>
        
      </div>
  )
}

export default ItemDescription