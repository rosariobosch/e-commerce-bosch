import { Link } from "react-router-dom";

const CartWidget = () => {

    return <Link to="/cart"><div className='cartWidget'>

        <img src="../assets/imagenes/shopping-cart.png" alt="Carrito" />
        <p>0</p>
    </div>
    </Link>
}

export default CartWidget;