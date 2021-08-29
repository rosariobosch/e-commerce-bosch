import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) => {


    const [cart, setCart] = useState([]);

    const addItem = (name, quantity, price, id, img) => {   
        const item = {name: name, quantity: quantity, price: price*quantity, id: id, img: img}
        setCart(currentCart => [...currentCart, item])
    }

    const removeItem = (id) => {
        let items = cart.filter(product => product.id !== id)
        setCart([...items])
    }

    const clearCart = () => {
        setCart([])
    }

    return <CartContext.Provider value = {{cart, removeItem, addItem, clearCart}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;