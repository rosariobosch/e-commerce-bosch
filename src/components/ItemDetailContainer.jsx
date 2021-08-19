import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import data from "./productos.json";

const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()
    console.log(data)

    useEffect(()=>{
        const productos = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(data)
                    reject(console.log('error'))
                },100)
            })
            
        productos.then(()=>{
            const producto = data.find(element => element.id === id)
            setProducto(producto)
            console.log(producto)
            console.log(id)
        })
    },[id])


    return (
    <>
    {producto ? <ItemDetail id={producto.id} name={producto.name} description={producto.description} price={producto.price} img={producto.img} /> : <h2>Cargando...</h2>}
    </>
    )

}

export default ItemDetailContainer;