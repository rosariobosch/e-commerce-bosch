import ItemCount from "./ItemCount";


const Item = ({id, name, img, price}) => {

    const handleAdd = (count) => {
        console.log(count);
    }

        return <div className='card' key={id}>

            <img src={img} alt="Placeholder" className='product-img'/>
            <h2 className='product-name'>{name}</h2>

            <ItemCount stock={5} initial={1} onAdd={handleAdd}/>

            <h2>$ {price}</h2>
        </div>
}
export default Item