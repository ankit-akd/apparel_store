import React, {useState} from "react";
import Cart from "../components/Cart";
import '../App.css';
import NavigationBar from "../components/NavigationBar";

const CartPage = ({cartItems, updateCartItem, removeCartItem}) => {
    return(
        <div className="cart-page">
            <NavigationBar cartItems={cartItems}/>
            <Cart cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />
        </div>
    );
};

// const CartPage = ({cartItems, updateCartItem, removeCartItem}) => {console.log('cartitems',cartItems)
//     return(
//         <>
//             <header className="header"> 
//                 <h1>TeeRex Store</h1>
//                 <div className="header-right">
//                     <a href="/">Products</a>
//                     <a href="/cart" className="cart-icon">
//                         <span className="cart-count">{cartItems.length}</span>
//                         🛒
//                     </a>
//                 </div>
//             </header>
//             <div className="cart-page">
//                 <h2>Shopping Cart</h2>
//                 <Cart cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />
//             </div>
//         </>
//     );
// };

export default CartPage;
