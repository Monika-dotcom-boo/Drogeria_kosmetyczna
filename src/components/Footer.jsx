function Footer() {
    return (
      <footer>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mb-10 xl:mb-0ć">
            <div className="footer-heading">Informacje</div> 
            <div className="line-height">
              <ul>
                <li>
                  Informacje o firmie 
                </li>
                <li>
                  Metody dostawy i koszty wysyłki
                </li>
                <li>
                  Regulamin
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mb-10 xl:mb-0">
            <div className="footer-heading">Pomoc</div>
            <div className="line-height">
              <ul>
                <li>Kontakt</li>
                <li>Wyszukiwarka</li>
                <li>Dostawa tego samego dnia</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mb-10 xl:mb-0">
            <div className="footer-heading">Moje konto</div>
            <div className="line-height">
              <ul>
                <li> Zarejestruj się</li>
                <li> Moje zamówienia </li>
                <li> Sprawdź status zamówienia</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 mb-10 xl:mb-0">
            <div className="footer-heading">Akcje promocyjne</div>
            <div className="line-height">
              <ul>
                <li> Dzień Mamy </li>
                <li> Dzień Kobiet </li>
                <li> Walentynki </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> 
    )
}

export default Footer