import {MenuItem, MenuSubItem} from "../menuItems/MenuItems";
import Logo from "../logo/Logo";
import CartWidget from "../cartWidget/CartWidget";


const NavBar = () => {

    return <div className='navBar'>
        <Logo />
        <section className='menuItems'>
            <div className='menu'>
                <MenuItem name='Productos' link='/' />
                <MenuItem name='Contacto' link='#' />
                <CartWidget />
            </div>
            <div className='subMenu'>
                <MenuSubItem name='Sintetizadores' category='sintetizadores' />
                <MenuSubItem name='Controladores MIDI' category='controladores' />
                <MenuSubItem name='Micrófonos' category='microfonos' />
                <MenuSubItem name='Auriculares y monitores' category='auriculares' />
                <MenuSubItem name='Interfaces' category='interfaces' />
            </div>
        </section>
        
    </div>
}

export default NavBar;