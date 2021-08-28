import Item from '../item/Item';
import { useParams } from "react-router-dom";
import data from "../productos.json";
import { useEffect, useState } from "react";

const ItemList = ({items}) => {  


    const { category } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        const productos = () => {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(data)
                },2000)
            })
        }
        productos().then((items)=>{
            if(category != null){
                const productosFiltrados=items.filter((producto)=>producto.category===category)
                setProductos(productosFiltrados)
            } else {
                setProductos(items)
            }
        })
    },[category])

    return <div className='item-list'>{productos.map(product => <Item id={product.id} key={product.id} name={product.name} img={`../${product.img}`} price={product.price} category = {product.category}/>)}</div>

}

export default ItemList;