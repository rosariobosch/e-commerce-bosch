import ItemList from "../itemList/ItemList";
import Item from '../item/Item';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Firebase } from '../../firebase/index';

const ItemListContainer = () => {

    const { category } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
      Firebase.getAll('productos').then(docs => {
        const arr = [];
        docs.forEach(item => {
          const data = item.data();
          arr.push(
            <Item
              key={item.id}
              id={item.id}
              name={data.name}
              price={data.price}
              stock={data.stock}
              img={data.img}
              category={data.category}
            />
          );
        });

        if(category != null){
          const filteredArr=arr.filter(producto=> producto.props.category==category)
          console.log(filteredArr)
          setProductos(filteredArr)
         } else {
          setProductos(arr)
         }
        
      });
    }, [category]);

    return <ItemList items={productos} />
}

export default ItemListContainer;