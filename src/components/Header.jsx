import React, { useState, useContext } from "react";
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import  Logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import  ShoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle ] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return(
        <nav>
            <img src={ menu } alt="menu" className="menu" />
            <div className="navbar-left">
                <img src= { Logo } alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furniture</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={ handleToggle } >
                    platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart">
                    <img src= { ShoppingCart } alt="shopping cart"/>
                    <div>{state.cart.length > 0 ? state.cart.length : null }</div>
                    </li>
                </ul>
            </div>
            {toggle && <Menu /> }
        </nav>
    );
}

export default Header;