import Logo from "./Logo"

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-col-1">
                <Logo />
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio accusamus pariatur reprehenderit accusantium aut quasi maiores quod, deleniti expedita adipisci enim laudantium quam facere rem, saepe sunt, sint hic.</h2>
            </div>
            <div className="footer-col-2">
                <h3>Sarmiento 1735</h3>
                <h3>+54 5755 3456</h3>
                <h3>contacto@retrostudios.com</h3>
            </div>
            <div className="footer-col-3">
                <h3>Sobre nosotros</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, illum laborum! Eos nostrum ex voluptates odio rerum? Aliquam quasi quaerat quisquam beatae doloremque velit reprehenderit ratione, provident maxime eveniet blanditiis!</p>

            </div>
        </div>
    )
}

export default Footer;