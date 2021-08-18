
import ItemList from "./ItemList";
import Products from "./productos.json"
import { useState } from 'react';

const ItemListContainer = () => {

    const productArr = Products

    const [products, setProducts] = useState([]);


    const promise = new Promise ((resolve, reject) => {

        setTimeout(() => {
                resolve(productArr)
                reject('No products')
        }, 2000);
    })

    
    promise.then(() => {
        if (products.length === 0) setProducts(productArr)   
            

    }).catch((err) => {
        console.log(err + ' were found')
    })

    return <ItemList items = {products} />
}

export default ItemListContainer;