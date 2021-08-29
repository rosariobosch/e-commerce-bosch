import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {useContext} from "react";

const CartWidget = () => {
    
    const {cart} = useContext(CartContext);
    const totalItems = cart.map(item => {return item.quantity})

    console.log(totalItems)
    
    return <Link to="/cart"><div className='cartWidget'>

        <img src="../assets/imagenes/shopping-cart.png" alt="Carrito" />
        <p>{totalItems.reduce((acc, curr) => curr + acc, 0)}</p>
    </div>
    </Link>
}

export default CartWidget;