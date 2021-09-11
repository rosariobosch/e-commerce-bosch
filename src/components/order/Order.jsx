import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
const Order = () => {

    const {cart} = useContext(CartContext);
    const total = cart.map(product => {return product.price});

    return <div className="order"> 
        
        <h2 className="order-title">¡Gracias por tu compra!</h2>

        <div className="order-subtitle">
                <h2>Imagen</h2>
                <h2>Producto</h2>
                <h2>Cantidad</h2>
                <h2>Precio</h2>
        </div>

        <div className="order-detail">
            {cart.map(product => <CartItem id={product.id} key={product.id} name={product.name} img={`../../${product.img}`} price={product.price} category = {product.category} quantity = {product.quantity}/>)}
            </div>

            <div className="total">
                <h3>Total: {total.reduce((acc, curr) => curr + acc, 0)}</h3>
            </div>

    </div>

}

export default Order;