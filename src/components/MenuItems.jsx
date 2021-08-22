import { Link } from "react-router-dom";

const MenuItem = (props) => {

    return <a href={props.link}>{props.name}</a>
}

const MenuSubItem = (props) => {

    return <Link to={`/category/${props.category}`}>{props.name}</Link>
}

export {MenuItem, MenuSubItem}