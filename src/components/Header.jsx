import Logo from '../assets/Lorem_impsum_logo.png';
import cartIcon from "../assets/icon-shopping-cart.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from  '@fontawesome/icon=faHeart';


function Header() {
  const navElements =[
    "Nowości", 
    "Marki",
    "Makijaż",
    "Pielęgnacja",
    "Włosy", 
    "Perfumy",
    "Paznokcie", 
    "Akcesoria", 
    "Dom",
    "Men",
    "Zdrowie", 
    "Erotyka", 
    "Zestawy", 
    "Promocje"
  ]
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
            {
              navElements.map(element => (
                <li>
                  <Link to="/category">{element}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </header> 
    )
}

export default Header