import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) setCount(count+1);
    }

    const decrease = () => {
        if (count > 1) setCount(count-1);
    }

    return <div className='card'>

        <img src="/assets/imagenes/placeholder-images.png" alt="Placeholder" className='product-img'/>
        <h2 className='product-name'>Nombre del producto</h2> 
        <div className='item-counter'>
            <button onClick={() => decrease()}>-</button>
            <p>{count}</p>
            <button onClick={() => increase()}>+</button>
        </div>
        <button className='cart-button' onClick={() => onAdd(count)}>Agregar al carrito</button>
        

    </div>
};

export default ItemCount;