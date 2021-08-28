
const CartItem = ({id, name, img, price, count}) => {

    // const handleAdd = (count) => {
    //     console.log(count);
    // }

        return <div className='card' id={id}>
            <img src={img} alt="Placeholder" className='product-img'/>
            <h2 className='product-name'>{name}</h2>

            <h2 className="price">$ {price}</h2>
            <h2>{count}</h2>
        </div>
}
export default CartItem