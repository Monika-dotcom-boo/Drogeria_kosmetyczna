import Product from '../components/Product';
import { useProducts } from '../context/productsContext';

function Category() {
  const {products} = useProducts()
  return (
    <>
      <div className="Category text-7xl lowercase w-full border-b border-solid border-gray-400 pb-5 "> Kategorie</div>
      <div className="flex">
        <div className="border-r border-solid border-gray-400 w-3/12 p-5 pt-10">
          <div className="bold upersace text-3xl w-full text-left relative uppercase font-bold flex-wrap">
            Kategorie
          </div>
          <div className="w-full text-3xl mt-14  ml-10 px-25 font-bold">
            Wszystkie kategorie
          </div>
          <div>
            <ul>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Nowości 
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Marki 
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Makijaż 
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Pielęgnacja 
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Włosy
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Perfumy
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Paznokcie
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Akcesoria
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Dom 
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Men 
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Zdrowie 
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Erotyka 
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Zestawy 
              </li>
              <li className="lowercase pb-2 text-3xl mt-5 px-20 capitalize px-xxs">
                Promocje
              </li>
            </ul>
          </div>
        </div>
        <div className="w-9/12 p-5"> 
          <div className="flex flex-wrap pt-10">
            {products ? products.map((product) => (
              <div key={product.id} className="w-4/12 mb-40">
                <Product id={product.id} name={product.name} category={product.category} price={product.price} image={product.image} />
              </div>
            )) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default Category