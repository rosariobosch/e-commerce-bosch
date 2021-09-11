
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Firebase } from '../../firebase/index';

const ItemDetailContainer = ()=>{

    const [producto, setProducto] = useState()
    const {id} = useParams()

    useEffect(() => {
        Firebase.get(`productos/${id}`).then(res => {
          const item = res.data();
          setProducto(
            <ItemDetail
              id={id}
              name={item.name}
              price={item.price}
              img={item.img}
            />
          );
        });
      }, []);

    return <>{producto}</>

}

export default ItemDetailContainer;