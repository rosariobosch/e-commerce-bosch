import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({id, img, name, description, price}) => {

    const [isVisible, setIsVisible] = useState(true)
    const [itemCount, setItemCount] = useState(0)

    const {addItem, isInCart} = useContext(CartContext)

    const handleAdd = (count) => {
        setIsVisible(false)
        setItemCount(count)
        let cartItem = isInCart(id)
        if(cartItem == false) {
            addItem(name, count, price, id, img)

        }
    }

    return <div className='item-detail' id={id}>
        <div className="detail">
            <img src={`../${img}`} alt="Imagen del producto"/>
            <div className='item-detail-text'>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>$ {price}</p>
            </div>
        </div>

        {isVisible && <ItemCount stock={5} initial={1} onAdd={handleAdd}/>}
        {!isVisible && <button className="cart-button buy-button"><Link to='/cart'>Terminar mi compra</Link></button>}
        
    </div>
    
}

export default ItemDetail;