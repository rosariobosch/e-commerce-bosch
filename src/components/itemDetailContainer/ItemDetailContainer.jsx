import { useEffect, useState } from "react";
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import data from "../productos.json";

const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState({}) 
    const {id} = useParams()

    useEffect(()=>{
        const productos = new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(data)
                },100)
            })
            
            productos.then((value)=>{
                const producto = value.find(element => element.id == id)
                setProducto(producto)
            })
    },[])


    return (
    <>
        {producto ? <ItemDetail id={producto.id} name={producto.name} description={producto.description} price={producto.price} img={producto.img} /> : <h2>Cargando...</h2>}  
    </>
    )

}

export default ItemDetailContainer;