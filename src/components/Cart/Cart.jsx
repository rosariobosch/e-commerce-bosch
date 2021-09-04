import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Firebase } from "../../firebase";
import { useState } from "react";
import OrderForm from "../orderForm/OrderForm";

const Cart = () => {

    const { cart } = useContext(CartContext);
    const { removeItem, clearCart } = useContext(CartContext);

    const total = cart.map(product => {return product.price})

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    const [isFormComplete, setIsFormComplete] = useState(false)

    const handleChange = () => {

        setName(document.getElementById('name').value);
        setPhone(document.getElementById('phone').value);
        setEmail(document.getElementById('email').value);

        console.log(name)
        console.log(phone)
        console.log(email)

        if((name !== "" && name !== undefined) && phone !== "" && email !== "") {
            setIsFormComplete(true)
        } else {
            setIsFormComplete(false)
        }
    }
    
    const handlePurchase = () => {
        const newOrder = {
          buyer: {
            name: name,
            phone: phone,
            email: email
          },
          items: cart,
          date: new Date().toString()
        };
        let totalPrice = 0;
        cart.forEach(item => {
          newOrder.items.push(item);
          totalPrice = totalPrice + item.price;
        });
        newOrder['totalPrice'] = totalPrice;
        console.log(newOrder);
    
        Firebase.add('orders', newOrder).then(res => console.log(res));
      };

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

            <OrderForm onChange={handleChange} />
            <Link to="/order">
            {isFormComplete ? <button onClick={handlePurchase}>Finalizar compra</button> : <h3>Completá el formulario</h3>}
            </Link>
        </div>
}

export default Cart;