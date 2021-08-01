import {MenuItem, MenuSubItem} from "./MenuItems";
import Logo from "./Logo";


const NavBar = () => {

    return <div className='navBar'>
        <Logo />
        <section className='menuItems'>
            <div className='menu'>
                <MenuItem name='Productos' link='#' />
                <MenuItem name='Contacto' link='#' />
            </div>
            <div className='subMenu'>
                <MenuSubItem name='Sintetizadores' link='#' />
                <MenuSubItem name='Controladores MIDI' link='#' />
                <MenuSubItem name='Micrófonos' link='#' />
                <MenuSubItem name='Auriculares y monitores' link='#' />
                <MenuSubItem name='Interfaces' link='#' />
            </div>
        </section>
        
    </div>
}

export default NavBar;