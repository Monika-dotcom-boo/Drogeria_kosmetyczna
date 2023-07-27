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
    <header className="text-1xl relative left-1/2 translate-x-[-50%] w-screen px-[105px] shadow-md flex flex-wrap">
      <div className=" outline-none w-2/12 px-6 py-6">
        <Link to="/" target="_self">
          <img src={Logo} className="logo" />
        </Link>
      </div>
      <form className="relative w-6/12 px-6 flex items-center justify-end">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="absolute" />
        <input type="text" value={searchedValue} onInput={(e) => setSearchedValue(e.target.value)} placeholder="Szukaj" className="text-[2rem] h-[50px] w-4/5 py-5 pl-2 pr-20 pr-70 focus:outline-none border-b-2 border-solid border-grey"  />
      </form>
      <div className="cart w-4/12 px-6 flex justify-end items-center">
        <Link to="/cart" className="pr-6">
          <img src={cartIcon} alt="cart" />
        </Link>
      </div>
      <nav className="text-xs font-light uppercase block w-full px-6 ">
        <ul className="flex flex-wrap justify-between w-full ">
          {
                navElements.map(element => (
                  <li key={element}>
                    <Link className="text-[1.45rem] leading-normal font-light uppercase block px-3 pb-4 hover:color-puprle" to="/category">{element}</Link>
                  </li>
                ))
              }
        </ul>
      </nav>
    </header>
  )
}

export default Header