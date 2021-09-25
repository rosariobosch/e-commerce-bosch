import { Link } from "react-router-dom";

const Item = ({id, name, img, price}) => {

    const handleAdd = (count) => {
        
    }

        return <div className='card' id={id}>
            <Link to={`/item-detail/${id}`}>
            <img src={`../${img}`} alt="Placeholder" className='product-img'/>
            <h2 className='product-name'>{name}</h2>
            </Link>
            <Link to={`/item-detail/${id}`}>
                <button>Ver detalle</button>
            </Link>

            <h2 className="price">$ {price}</h2>
        </div>
}
export default Item