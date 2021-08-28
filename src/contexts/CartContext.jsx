import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) => {


    const [cart, setCart] = useState([]);

    const addItem = (name, quantity, price, id) => {
        const item = {name: name, quantity: quantity, price: price*quantity, id: id}
        setCart(currentCart => [...currentCart, item])
    }



    return <CartContext.Provider value = {[cart, setCart, addItem]}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;