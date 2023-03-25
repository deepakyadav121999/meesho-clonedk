import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import {DataAppContext} from './Context'

function Header() {
  const cart = useContext(DataAppContext)
  const {lth,setsrbar} =cart


  return (
    <>
  <div className="header">
          <div className="header_left">
          <Link to={'/'} style={{textDecoration: 'none'}}>  <p className='meesho'>meesho</p></Link>
                <div className="input">
                <Link to={'search'} style={{textDecoration: 'none'}}>  
                <SearchIcon className='icon'/>  <input className='iphdd1' type="text" placeholder='Try Saree,Kurti or Search by Product Code' onChange={(e)=>setsrbar(e.target.value)}/></Link>
                   
                {/* <input type="text" placeholder='Try Saree,Kurti or Search by Product Code'/> */}
                </div>
               
          </div>
          <div className="header_right">
              <div className="dnd">
                 <InstallMobileIcon className='icon'/>
                <p>Download App</p>
              </div>
              <p>Become a Supplier</p>
              <div className="profile">
                <PermIdentityIcon className='icon move clr'/>
                <Link to={'/profile'} style={{textDecoration: 'none'}} ><p className='pprofile'>Profile</p></Link>  
              </div>
              <div className="cart">
               
                <Link to={'/cart'} style={{textDecoration: 'none'}}>
                 <ShoppingCartIcon className='icon move'/> 
                  <p className='cartlink move'>Cart <p className='movement_head'> {lth}</p></p></Link>
              </div>
          </div>
  </div>
     <div className="header2">
     <Link to={'/womenethinic'} style={{textDecoration: 'none'}}><p className='hov'>Women Ethnic</p></Link>
     <Link to={'/western'} style={{textDecoration: 'none'}}> <p  className='hov'>Women Western</p></Link>
     <Link to={'/men'} style={{textDecoration: 'none'}}>  <p  className='hov'>Men</p></Link>
     <Link to={'/kids'} style={{textDecoration: 'none'}}> <p  className='hov'>Kids</p></Link>
     <Link to={'/kitchen'} style={{textDecoration: 'none'}}>  <p  className='hov'>Home & Kitchen</p></Link>
     <Link to={'/health'} style={{textDecoration: 'none'}}>  <p  className='hov'>Beauty & Health</p></Link>
     <Link to={'/Jwellery'} style={{textDecoration: 'none'}}>    <p  className='hov'>Jwellery & Accessories</p></Link>
     <Link to={'/Bags'} style={{textDecoration: 'none'}}>      <p  className='hov'>Bags & Footwear</p></Link>
     <Link to={'/Electronics'} style={{textDecoration: 'none'}}>        <p  className='hov'>Electronics</p></Link>
     
    
   
    
    
     </div>


  </>
  )
}

export default Header