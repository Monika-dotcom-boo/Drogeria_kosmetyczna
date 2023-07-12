import Product from '../components/Product';
import cosmetic from '../../public/Bielenda.png';

function Category() {
    return (
      <>
        <div className="Category text-7xl lowercase w-full border-b border-solid border-gray-400 pb-5 "> Kategorie</div>
        <div className="flex">
          <div className="border-r border-solid border-gray-400 w-3/12 p-5 pt-10">
            <div className="bold upersace text-3xl w-full text-left relative uppercase font-bold flex-wrap">
              Kategoria
            </div>
            <div className="w-full text-3xl mt-14  ml-10 px-25 font-bold">
              Wszystkie kategorie
            </div>
            <div className="lowercase pb-2">
              <ul>
                <div className="lowercase pb-2">
                  <li>
                    Nowości 
                  </li>
                </div>
                <li>
                  Marki 
                </li>
                <li>
                  Makijaż 
                </li>
                <li>
                  Pielęgnacja 
                </li>
                <li>
                  Włosy
                </li>
                <li>
                  Perfumy
                </li>
                <li>
                  Paznokcie
                </li>
                <li>
                  Akcesoria
                </li>
                <li>
                  Dom 
                </li>
                <li>
                  Men 
                </li>
                <li>
                  Zdrowie 
                </li>
                <li>
                  Erotyka 
                </li>
                <li>
                  Zestawy 
                </li>
                <li>
                  Promocje
                </li>
              </ul>
            </div>
          </div>
          <div className="w-9/12 p-5"> 
            <div className="flex flex-wrap pt-10">
              <div className="w-4/12 mb-40">
                <Product id={1} name="Lirene" brand="Lirene" category="cosmetic" price={23.34} image={cosmetic} />
              </div>
              <div className="w-4/12 mb-40">
                <Product id={1} name="Lirene" brand="Lirene" category="cosmetic" price={23.34} image={cosmetic} />
              </div>
              <div className="w-4/12 mb-40">
                <Product id={1} name="Lirene" brand="Lirene" category="cosmetic" price={23.34} image={cosmetic} />
              </div>
              <div className="w-4/12 mb-40">
                <Product id={1} name="Lirene" brand="Lirene" category="cosmetic" price={23.34} image={cosmetic} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Category