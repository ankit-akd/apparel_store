import React from 'react';
import '../App.css';

const NavigationBar = ({cartItems}) => {

    return(
        <div className='navigation'>
               <header className="header"> 
                <h1>TeeRex Store</h1>
                <div className="header-right">
                    <a href="/">Products</a>
                    <a href="/cart" className="cart-icon">
                        <span className="cart-count">{cartItems.length ? cartItems.length : 0}</span>
                        🛒
                    </a>
                </div>
            </header>            
        </div>
    )

};

export default NavigationBar;