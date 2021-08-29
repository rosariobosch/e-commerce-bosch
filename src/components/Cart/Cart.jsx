import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
const Cart = () => {

    const { cart } = useContext(CartContext);
    const { removeItem, clearCart } = useContext(CartContext)

    const total = cart.map(product => {return product.price})

    return  <div className="cart">
                <div className="cart-title">
                    <h2>Imagen</h2>
                    <h2>Producto</h2>
                    <h2>Cantidad</h2>
                    <h2>Precio</h2>
                </div>
            
            {cart.length == 0 && <h3 className="no-products">No se encontraron productos</h3>}
            
            <div className="cart-detail">
            {cart.map(product => <CartItem id={product.id} key={product.id} name={product.name} img={`../../${product.img}`} price={product.price} category = {product.category} quantity = {product.quantity} onClick = {removeItem}/>)}
            </div>
            
            <div className="total">
                <h3>Total: {total.reduce((acc, curr) => curr + acc, 0)}</h3>
            </div>

            <button onClick={() => clearCart()} className="empty-btn">Vaciar carrito</button>
        </div>
}

export default Cart;