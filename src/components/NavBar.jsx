import {MenuItem, MenuSubItem} from "./MenuItems";
import Logo from "./Logo";
import CartWidget from "./CartWidget";


const NavBar = () => {

    return <div className='navBar'>
        <Logo />
        <section className='menuItems'>
            <div className='menu'>
                <MenuItem name='Productos' link='#' />
                <MenuItem name='Contacto' link='#' />
                <CartWidget />
            </div>
            <div className='subMenu'>
                <MenuSubItem name='Sintetizadores' link='sintetizadores' />
                <MenuSubItem name='Controladores MIDI' link='controladores' />
                <MenuSubItem name='Micrófonos' link='microfonos' />
                <MenuSubItem name='Auriculares y monitores' link='auriculares' />
                <MenuSubItem name='Interfaces' link='interfaces' />
            </div>
        </section>
        
    </div>
}

export default NavBar;