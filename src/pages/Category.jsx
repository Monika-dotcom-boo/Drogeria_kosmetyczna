import Product from '../components/Product';
import { useProducts } from '../context/productsContext';
import { useSearch } from '../context/searchContext';
import { useState, useEffect } from 'react'

function Category() {
  const {products, categories} = useProducts()
  const { searchedValue } = useSearch()

  const [activeCategory, setActiveCategory] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryClick = (category) => {
    if (category === activeCategory) {
      setActiveCategory(null)
      return
    }

    setActiveCategory(category)
  }

  useEffect(() => {
    const filteredProducts = products.filter(product => {
      if (!activeCategory) {
        return true
      }
      return product.category === activeCategory
    }).filter(product => {
      if (!searchedValue) {
        return true
      }

      return product.name.toLowerCase().includes(searchedValue.toLocaleLowerCase())
    })

    setFilteredProducts(filteredProducts)

  }, [products, activeCategory, searchedValue]);

  return (
    <div className="py-14 pb-20">
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
              {categories ? categories.map(category => (
                <li key={category} onClick={() => handleCategoryClick(category)} className={`lowercase pb-2 text-3xl mt-5 px-20 capitalize cursor-pointer ${activeCategory === category ? 'underline' : ''}`}>
                  {category}
                </li>
              )) : null}
            </ul>
          </div>
        </div>
        <div className="w-9/12 p-5"> 
          <div className="flex flex-wrap pt-10">
            {filteredProducts ? filteredProducts.map((product) => (
              <div key={product.id} className="w-4/12 mb-40">
                <Product id={product.id} name={product.name} category={product.category} price={product.price} image={product.image} />
              </div>
            )) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category