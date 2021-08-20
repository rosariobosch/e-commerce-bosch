import { Link } from "react-router-dom";

const MenuItem = (props) => {

    return <a href={props.link}>{props.name}</a>
}

const MenuSubItem = (props) => {

    return <Link to={`/category/${props.category}`}><a href={props.link}>{props.name}</a></Link>
}

export {MenuItem, MenuSubItem}