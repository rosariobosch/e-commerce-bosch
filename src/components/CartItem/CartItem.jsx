
const CartItem = ({id, name, img, price, quantity, onClick}) => {

        return <div className='cart-item' id={id}>
                <div className="cart-img">
                    <img src={`../../${img}`} alt="Placeholder" className='product-img'/>
                </div>
                <h2 className='product-name'>{name}</h2>
                <h2>{quantity}</h2>
                <h2 className="price">$ {price}</h2>
                <button onClick = {() => onClick(id)}>X</button>  
            </div>
}
export default CartItem