import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

import "./NavBar.css";

const NavBar = () => {


    return (
        <nav className="navBar">

            <Link to="/" className="imageNavbar">
                <img className="iconNavbar" src="https://img3.stockfresh.com/files/v/vector1st/m/33/8997760_stock-vector-video-game-shop-theme-logo-template.jpg" />
            </Link>

            <ul className="categoriesNavbar">
                <Link to="/category/accion" className="categorieNavbar">
                    Accion
                </Link>
                <Link to="/category/deportes" className="categorieNavbar">
                    Deportes
                </Link>
                <Link to="/category/aventura" className="categorieNavbar">
                    Aventura
                </Link>
            </ul>

            <Link>
                <CartWidget/>
            </Link>
        </nav>
    )
}

export default NavBar