import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Productos from "./productos.json";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()

    const {id} = useParams()
    
    useEffect(()=>{
        const productos = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(Productos)
                    reject(console.log('error'))
                },2000)
            })
            
        productos.then(()=>{
            let item = Productos.find(item => item.id === id)
            setProducto(item)
            console.log(item)
        })
    },[id])

    

    return <> {producto ? <ItemDetail name={producto.name} description={producto.description} price={producto.price} img={producto.img} /> : <h2>Cargando...</h2>}
    </>
}

export default ItemDetailContainer;