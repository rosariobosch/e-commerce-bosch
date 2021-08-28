import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {useContext} from "react";

const CartWidget = () => {
    
    const [cart] = useContext(CartContext);

    return <Link to="/cart"><div className='cartWidget'>

        <img src="../assets/imagenes/shopping-cart.png" alt="Carrito" />
        <p>{cart.length}</p>
    </div>
    </Link>
}

export default CartWidget;