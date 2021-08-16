import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const Item = ({id, name, img, price}) => {

    const handleAdd = (count) => {
        console.log(count);
    }

        return <div className='card' key={id}>
            <Link to={`/item-detail/${id}`}>
            <img src={img} alt="Placeholder" className='product-img'/>
            <h2 className='product-name'>{name}</h2>
            </Link>

            <ItemCount stock={5} initial={1} onAdd={handleAdd}/>

            <h2 className="price">$ {price}</h2>
        </div>
}
export default Item