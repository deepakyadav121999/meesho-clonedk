import React from 'react'
import '../styles/Item.css'
import StarIcon from '@mui/icons-material/Star';
function Item(props) {

  return (
    <div className="item">
        <img src={props.img} alt=""  className='item_img'/>
         <p className='productname'>{props.name}</p>
        <p className='productprice'>₹ {props.price} <span className='onwords'>onwords</span></p>
         <p className='productdiscount'> ₹ 100 discount on 1st order</p>
        <div className="rating">
         <p className='rate'>{props.rating.rate}<StarIcon/></p>
         
         <p className='item_count'>{props.rating.count} pices left</p>
         </div>
    </div>
  )
}

export default Item