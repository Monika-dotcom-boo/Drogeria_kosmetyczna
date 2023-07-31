import Logo from '@/assets/Lorem_impsum_logo.png';
import cartIcon from "@/assets/icon-shopping-cart.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSearch } from '@/context/searchContext';
import { useState } from 'react';


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
  const [isOpen, setIsOpen] = useState(false);


  const handleMenuOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <header className="text-1xl relative left-1/2 translate-x-[-50%] w-screen px-4 lg:px-[105px] shadow-md flex flex-wrap">
      <div className=" outline-none w-full md:w-2/12 px-6 py-6">
        <Link to="/" target="_self">
          <img src={Logo} className="logo" />
        </Link>
      </div> 
      <form className="relative w-9/12 md:w-8/12 xl:w-6/12 px-6 flex items-center justify-end">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="absolute" />
        <input type="text" value={searchedValue} onInput={(e) => setSearchedValue(e.target.value)} placeholder="Szukaj" className="text-[2rem] w-full xl:w-[450px] h-[50px] w-4/5 py-5 pl-2 pr-20 pr-70 focus:outline-none border-b-2 border-solid border-grey"  />
      </form>
      <div className="cart w-3/12 md:w-2/12 xl:w-4/12 px-6 flex justify-center md:justify-end items-center">
        <Link to="/cart" className="pr-6">
          <img src={cartIcon} alt="cart" />
        </Link>
        <button onClick={handleMenuOpen} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <nav className={`text-xs font-light uppercase block w-full px-6 ${isOpen ? '' : 'hidden'} md:block`}>
        <ul className="flex flex-wrap justify-between w-full flex-col md:flex-row pt-10 md:pt-0 text-center md:text-left ">
          {
                navElements.map(element => (
                  <li key={element}>
                    <Link className="text-[1.45rem] leading-normal font-light uppercase block px-3 pb-6 md:pb-4 hover:color-puprle" to="/category">{element}</Link>
                  </li>
                ))
              }
        </ul>
      </nav>
    </header>
  )
}

export default Header