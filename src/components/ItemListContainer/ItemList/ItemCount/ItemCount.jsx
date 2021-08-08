import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) setCount(count+1);
    }

    const decrease = () => {
        if (count > 1) setCount(count-1);
    }

    return  <>
            <div className='item-counter'>
                <button onClick={() => decrease()}>-</button>
                <p>{count}</p>
                <button onClick={() => increase()}>+</button>
            </div>
            <button className='cart-button' onClick={() => onAdd(count)}>Agregar al carrito</button>
            </>
};

export default ItemCount;