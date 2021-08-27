import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {

    const [cart] = useContext(CartContext)
    const cartDisplay = []
    cart.forEach(element => cartDisplay.push(element.name, element.quantity))
    console.log(cartDisplay)
    return <>
        <h1>Carrito</h1>
        <div>{cartDisplay}</div>
    </>
}

export default Cart;