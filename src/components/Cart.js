import React from "react";

const Cart = ({cartItems, updateCartItem, removeCartItem}) => {console.log('props',cartItems);
    const totalAmount = cartItems.reduce((acc,item) => acc + item.price * item.quantity,0);

    return(
        <div className="cart">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.imageURL} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>Rs {item.price}</p>
                    <input type='number' value={item.quantity} onChange={(e) => updateCartItem(item.id, e.target.value)} />
                    <button onClick={() => removeCartItem(item.id)}>Delete</button>
                </div>
            ))}
            <div className="total-amount">
                <h3>Total amount: Rs {totalAmount}</h3>
            </div>
        </div>
    );
};

export default Cart;