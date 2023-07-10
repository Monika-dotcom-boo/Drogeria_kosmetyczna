import Logo from '../assets/logo.png';
import cartIcon from "../assets/icon-shopping-cart.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
      <header className="main-header flex flex-wrap">
        <div className="logo-wrapper w-2/12 px-6 py-6">
          <Link to="/" target="_self">
            <img src={Logo} className="logo" />
          </Link>
        </div>
        <form className="search w-6/12 px-6 flex items-center justify-end">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="search-icon" />
          <input type="text" placeholder="Szukaj"  />
        </form>
        <div className="cart w-4/12 px-6 flex justify-end items-center"> 
          <Link to="/cart" className="pr-6"> 
            <img src={cartIcon} alt="cart" />
          </Link>
        </div>
        <nav className="main-nav w-full px-6 ">
          <ul className="flex justify-between w-full ">
            <li>
              <Link to="/category">Nowości</Link>
            </li>
            <li>
              <a href="#">Marki</a>
            </li>
            <li>
              <a href="#">Makijaź</a>
            </li>
            <li>
              <a href="#">Pielęgnacja</a>
            </li>
            <li>
              <a href="#">Włosy</a>
            </li>
            <li>
              <a href="#">Perfumy</a>
            </li>
            <li>
              <a href="#">Paznokcie</a>
            </li>
            <li>
              <a href="#">Akcesoria</a>
            </li>
            <li>
              <a href="#">Dom</a>
            </li>
            <li>
              <a href="#">Nowości</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Zdrowie</a>
            </li>
            <li>
              <a href="#">Erotyka</a>
            </li>
            <li>
              <a href="#">Zestawy</a>
            </li>
            <li>
              <a href="#">Promocje</a>
            </li>
          </ul>
        </nav>
      </header> 
    )
}

export default Header