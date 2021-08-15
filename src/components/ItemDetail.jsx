import Item from "./Item";

const ItemDetail = ({item}) => {

    return <div className='item-detail'>

        <img src={item.img} alt="Imagen del producto"/>
        <div className='item-detail-text'>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>$ {item.price}</p>
        </div>
        
    </div>
}

export default ItemDetail;