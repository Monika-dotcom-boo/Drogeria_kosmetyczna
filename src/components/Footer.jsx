function Footer() {
  return (
    <footer>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mb-10 xl:mb-0ć">
          <div className="text-2xl font-semibold text-black uppercase mb-6">Informacje</div>
          <div className="leading-5 p-0 text-lg">
            <ul>
              <li className="pb-4 pr-4">
                Informacje o firmie
              </li>
              <li className="pb-4 pr-4">
                Metody dostawy i koszty wysyłki
              </li>
              <li className="pb-4 pr-4">
                Regulamin
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mb-10 xl:mb-0">
          <div className="text-2xl font-semibold text-black uppercase mb-6">Pomoc</div>
          <div className="leading-5 p-0 text-lg">
            <ul>
              <li className="pb-4 pr-4">Kontakt</li>
              <li className="pb-4 pr-4">Wyszukiwarka</li>
              <li className="pb-4 pr-4">Dostawa tego samego dnia</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mb-10 xl:mb-0">
          <div className="text-2xl font-semibold text-black uppercase mb-6">Moje konto</div>
          <div className="leading-5 p-0 text-lg">
            <ul>
              <li className="pb-4 pr-4"> Zarejestruj się</li>
              <li className="pb-4 pr-4"> Moje zamówienia </li>
              <li className="pb-4 pr-4"> Sprawdź status zamówienia</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mb-10 xl:mb-0">
          <div className="text-2xl font-semibold text-black uppercase mb-6">Akcje promocyjne</div>
          <div className="leading-5 p-0 text-lg">
            <ul>
              <li className="pb-4 pr-4"> Dzień Mamy </li>
              <li className="pb-4 pr-4"> Dzień Kobiet </li>
              <li className="pb-4 pr-4"> Walentynki </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer