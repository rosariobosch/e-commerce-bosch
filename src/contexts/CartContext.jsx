import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) => {


    const [cart, setCart] = useState([]);



    return <CartContext.Provider value = {[cart, setCart]}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;