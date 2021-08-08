import Item from "./Item/Item";
import Products from "../../productos/prodctos.json";

const promise = new Promise ((resolve, reject) => {

    setTimeout(() => {
        if(Products) {
            resolve('products')
        } else {
            reject('no products')
        }
    }, 2000);
    
})

promise.then((product) => {
    console.log(product + ' were found')
}).catch((error) => {
    console.log(error + ' were found')
})

/* Map */

const ProductComponents = Products.map(product => <Item key={product.id} name={product.name} img={product.img} price={product.price}/>)

const ItemList = () => {

    return <div className='item-list'>
        
        {ProductComponents}
    </div>

}



export default ItemList;