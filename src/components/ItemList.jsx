import Item from './Item';
import Products from "./prodctos.json"
import { useState } from 'react';

const ItemList = () => {

    const productArr = Products

    const [products, setProducts] = useState([]);


    const promise = new Promise ((resolve, reject) => {

        setTimeout(() => {
                resolve(productArr)
                reject('No products')
        }, 2000);
    })

    
    promise.then(() => {
        if (products.length === 0) setProducts(products.concat(productArr))   
            

    }).catch((err) => {
        console.log(err + ' were found')
    })

    return <div className='item-list'>{products.map(product => <Item key={product.id} name={product.name} img={product.img} price={product.price}/>)}</div>

}



export default ItemList;