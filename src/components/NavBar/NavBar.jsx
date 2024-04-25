import "./NavBar.css";

import NavBarContainer from "./NavBarContainer"


const NavBar = ({image, carrito, msj}) => {


    return (
        <>
<NavBarContainer/>
                <nav className="menuNavegable">
                
                    <div>
                        <img className="logo" src={image} alt="" />
                    </div>
                    <ul>
                        <li>
                            <a href="#">Electrodomesticos, {msj}</a>
                            <a href="#">Indumentaria</a>
                            <a href="#">Jardin</a>
                            <a href="#">Ofertas</a>
                        </li>
                    </ul>

                    <div className="cardCarrito">
                        <img src={carrito} alt="" />
                        <p>1</p>
                    </div>
                </nav>

        </>
    )
}

export default NavBar