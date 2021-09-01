
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Firebase } from '../../firebase/index';

const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState({}) 
    const [itemDom, setItemDom] = useState();
    const {id} = useParams()

    useEffect(() => {
        Firebase.get(`productos/${id}`).then(res => {
          const item = res.data();
          setItemDom(
            <ItemDetail
              id={id}
              name={item.name}
              price={item.price}
              img={item.img}
              onUpdateCount={items => setProducto(items)}
            />
          );
        });
      }, []);

    return <>{itemDom}</>

}

export default ItemDetailContainer;