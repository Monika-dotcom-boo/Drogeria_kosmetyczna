import Logo from '../assets/logo.png';
import cartIcon from "../assets/icon-shopping-cart.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="main-header flex flex-wrap">
        <div className="logo-wrapper w-2/12 px-6">
          <Link to="/" target="_self">
            <img src={Logo} className="logo" />
          </Link>
        </div>
        <form className="search w-6/12 px-6">
          <input type="text" />
        </form>
        <div className="cart w-4/12 px-6">
          <img src={cartIcon} alt="cart" />
        </div>
        <nav className="main-nav w-full px-6">
          <ul>
            <li>
              <a href="#">Nowości</a>
            </li>
            <li>
              <a href="#">Nowości</a>
            </li>
          </ul>
        </nav>
      </header> 
    )
}

export default Header