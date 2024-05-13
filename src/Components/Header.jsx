import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { useStateValue } from '../StateProvision/StateProvider';
// import { link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Header = () => {
     const navigate = useNavigate();
     const [{basket},dispatch]=useStateValue();
  return (
    <div className='header'>
       <div className="header__logo" onClick={() => navigate("/")}>
            <StoreIcon className="header__logoImage" fontSize='large'/>
            <h2 className="header__LogoTitle"> EShopping </h2>
       </div>
       <div className="header__search"> 
            <input type="text" name="" id="" className='header__searchInput' />
            <SearchIcon className='header__SearchIcon' />
       </div>
       <div className="header__nav" >  
            <div className="nav__item" onClick={() => navigate("/login")} >
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <span className="nav__itemLineTwo"> Sign In</span>
            </div>
            <div className="nav__item">
                <span className="nav__itemLineOne">Your</span>
                <span className="nav__itemLineTwo">shop</span>
            </div>
            <div className="nav__itemBasket" onClick={() => navigate("/checkout")}> 
               <ShoppingBasketIcon fontSize='large'/>
               <span className="nav__itemLineTwo nav__basketCount">{basket.length} </span>
            </div>
       </div>
    </div>
  )
}

export default Header