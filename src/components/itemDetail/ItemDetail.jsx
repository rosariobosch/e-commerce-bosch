import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({id, img, name, description, price}) => {

    const [isVisible, setIsVisible] = useState(true)
    const [itemCount, setItemCount] = useState(0)

    const [cart, addItem] = useContext(CartContext)

    console.log(cart)

    const handleAdd = (count) => {
        setIsVisible(false)
        setItemCount(count)
        addItem(name, count, price, id)
    }

    return <div className='item-detail' id={id}>
        <div className="detail">
            <img src={`../${img}`} alt="Imagen del producto"/>
            <div className='item-detail-text'>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>$ {price}</p>
                <p>{itemCount}</p>
            </div>
        </div>

        {isVisible && <ItemCount stock={5} initial={1} onAdd={handleAdd}/>}
        {!isVisible && <button className="cart-button buy-button"><Link to='/cart'>Terminar mi compra</Link></button>}
        
    </div>
    
}

export default ItemDetail;