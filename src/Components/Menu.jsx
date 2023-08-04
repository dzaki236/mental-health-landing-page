import { Link } from "react-scroll"

const Menu = () => {
    return (<>
    
    <header id="menu">
        <input type="checkbox" id="chekbox-burger"/>
        <div id="burger">&#9776;</div>
        <nav>
            <ul>
                <li><Link href='#about' to='about' smooth={true} duration={800}>About</Link></li>
                <li><Link href='#contact' to='contact' smooth={true} duration={800}>Contact</Link></li>
                <li><Link href='#links' to='links' smooth={true} duration={800}>Blog</Link></li>
                <li><a href="https://skilvul.com" id="link">Skilvul</a></li>
            </ul>
        </nav>
    </header>
    </>)
}
export default Menu