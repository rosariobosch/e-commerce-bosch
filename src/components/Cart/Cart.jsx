import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {

    const [cart] = useContext(CartContext)
    // const cartDisplay = []
    // cart.forEach(element => cartDisplay.push(element.name, element.count))
    // let i = 0

    return <>
        {/* <h1>Carrito</h1>
        <div>{cartDisplay}</div> */}

        <div className="cart-detail">
        {cart.map(product => <CartItem id={product.id} key={product.id} name={product.name} img={`../../${product.img}`} price={product.price} category = {product.category} count = {product.count}/>)}
        </div>
    </>
}

export default Cart;