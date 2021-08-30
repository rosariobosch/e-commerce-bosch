import Item from '../item/Item';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, getCollection } from '../../firebase/index';

const ItemList = () => {  


    const { category } = useParams()
    const [productos, setProductos] = useState([])

        useEffect(() => {
        async function fetchData() {
          const q = getCollection('productos')
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(doc => {
            // console.log(doc.id);
            productos.push(doc.data())
            setProductos([...productos])
          });
    
          
        }
        fetchData();
      }, []);

    // useEffect(()=>{
    //     const productos = () => {
    //         return new Promise((resolve)=>{
    //             setTimeout(()=>{
    //                 resolve(data)
    //             },2000)
    //         })
    //     }
    //     productos().then((items)=>{
    //         if(category != null){
    //             const productosFiltrados=items.filter((producto)=>producto.category===category)
    //             setProductos(productosFiltrados)
    //         } else {
    //             setProductos(items)
    //         }
    //     })
    // },[category])

    return <div className='item-list'>{productos.map(product => <Item id={product.id} key={product.id} name={product.name} img={`../${product.img}`} price={product.price} category = {product.category}/>)}</div>

}

export default ItemList;