

const ItemDetail = ({id, img, name, description, price}) => {

    return <div className='item-detail' id={id}>

        <img src={`../${img}`} alt="Imagen del producto"/>
        <div className='item-detail-text'>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>$ {price}</p>
        </div>
        
    </div>
}

export default ItemDetail;