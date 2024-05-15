import "./NavBar.css";
import { Link } from "react-router-dom";
import Contador from "../contador/ItemCount";

const NavBar = () => {


    return (
        <nav className="navBar">

            <Link to="/" className="imageNavbar">
                <img className="iconNavbar" src="https://img3.stockfresh.com/files/v/vector1st/m/33/8997760_stock-vector-video-game-shop-theme-logo-template.jpg" />
            </Link>

            <ul className="categoriesNavbar">
                <Link to="/category/Accion" className="categorieNavbar">
                    Accion
                </Link>
                <Link to="/category/Rol" className="categorieNavbar">
                    Deportes
                </Link>
                <Link to="/category/Survival" className="categorieNavbar">
                    Aventura
                </Link>
            </ul>

            <Link className="Count">
                <Contador stock={4} />
            </Link>
        </nav>
    )
}

export default NavBar