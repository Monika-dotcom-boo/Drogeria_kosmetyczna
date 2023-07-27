import Logo from '@/assets/Lorem_impsum_logo.png';
import cartIcon from "@/assets/icon-shopping-cart.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSearch } from '@/context/searchContext';


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

  const { searchedValue, setSearchedValue } = useSearch()

  return (
    <header className="text1xl relative left-1/2 transform -translate-x-1/2 w-screen px-105  shadow-md flex flex-wrap">
      <div className=" outline-none w-2/12 px-6 py-6">
        <Link to="/" target="_self">
          <img src={Logo} className="logo" />
        </Link>
      </div>
      <form className="relative w-6/12 px-6 flex items-center justify-end">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="absolute" />
        <input type="text" value={searchedValue} onInput={(e) => setSearchedValue(e.target.value)} placeholder="Szukaj" className="text-4xl h-50 w-80 p-5 pr-70 :focus:outline: none border-b-2 border-solid grey"  />
      </form>
      <div className="cart w-4/12 px-6 flex justify-end items-center"> 
        <Link to="/cart" className="pr-6"> 
          <img src={cartIcon} alt="cart" />
        </Link>
      </div>
      <nav className="px-3 py-4 text-xs font-light uppercase block w-full :hover: color-puprle px-6 ">
        <ul className="flex flex-wrap justify-between w-full ">
          {
            navElements.map(element => (
              <li key={element}>
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