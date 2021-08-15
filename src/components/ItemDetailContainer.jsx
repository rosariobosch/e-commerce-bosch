import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

/* let product = {} */




const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const getItem = () => {

        setTimeout(() => {
            fetch("./assets/prodctos.json")
            .then(response => {
                return response.json()
            })
            .then(data => setProduct(data[0]))
            .catch(console.log('error'))
        }, 2000);

        
    }

    
    useEffect(async () => {
        
        await getItem()
    }, [])

    return <ItemDetail item = {product} />
}

export default ItemDetailContainer;