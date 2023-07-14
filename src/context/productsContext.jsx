import { createContext, useContext, useEffect, useState } from "react";
import Api from "../api/api"

export const ProductsContext = createContext({
    products: [], 
    cart: [], 
    favorite: []
})

export function ProductsProvider({children}){
  const [products,setProducts] = useState([]) 
  const [cart,setCart] = useState([]) 
  const [favorites,setfavorites] = useState([]) 

  useEffect(()=>{
    (async () => { 
      try {
        const { data, error } = await Api
          .from('products')
          .select('*')

        if (!error){
          setProducts(data)
        }
      } catch (error) {
        console.log('Error in fetching products: ', error)
      }
    })()
  }, [])
  return (
    <ProductsContext.Provider value={{
      products, cart, favorites
    }}
    > 
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => useContext(ProductsContext) 