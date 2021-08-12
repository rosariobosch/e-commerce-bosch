import Item from './Item';

const ItemList = ({items}) => {

    return <div className='item-list'>{items.map(product => <Item key={product.id} name={product.name} img={product.img} price={product.price}/>)}</div>

}

export default ItemList;