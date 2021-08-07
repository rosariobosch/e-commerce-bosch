import ItemCount from "./ItemCount/ItemCount";

const ItemListContainer = () => {

    const handleAdd = (count) => {
        console.log(count);
    }

    return <ItemCount stock={5} initial={1} onAdd={handleAdd}/>
}

export default ItemListContainer;