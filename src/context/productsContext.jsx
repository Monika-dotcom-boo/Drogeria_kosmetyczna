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

  const addToCart = (productID) => {
    const foundIndex = cart.findIndex((elem) => {
      return elem.id === productID
    })
    
    if (foundIndex !== -1) {
      let newCart = [...cart];
      newCart[foundIndex] = {...newCart[foundIndex], qty:  newCart[foundIndex].qty + 1}
      setCart(newCart);
      return
    } 

    setCart([...cart, {
      id: productID,
      qty: 1
    }])
  }

  const decreaseQtyInCart = (productID) => {
    const foundIndex = cart.findIndex((elem) => {
      return elem.id === productID
    })
    
    if (foundIndex !== -1) {
      let newCart = [...cart];

      const newQty = newCart[foundIndex].qty - 1;
      
      if (newQty < 1) {
        removeFromCart(productID)
        return;
      }

      newCart[foundIndex] = {...newCart[foundIndex], qty:  newCart[foundIndex].qty - 1}
      setCart(newCart);
      return
    } 
  }

  const removeFromCart = (productID) => {
    const foundIndex = cart.findIndex((elem) => {
      return elem.id === productID
    })
    if (foundIndex !== -1) {
      let newCart = [...cart];
      newCart.splice(foundIndex, 1);
      setCart(newCart);
    } 
  }

  const addToFavorites = (productID) => {
    const foundIndex = favorites.findIndex((elem) => {
      return elem === productID
    })
    
    if (foundIndex !== -1) {
      return
    } 

    setfavorites([...favorites, productID])
  }

  const removeFavorite = (productID) => {
    const foundIndex = favorites.findIndex((elem) => {
      return elem === productID
    })
    if (foundIndex !== -1) {
      let newFavorites = [...favorites];
      newFavorites.splice(foundIndex, 1);
      setfavorites(newFavorites);
    } 
  }

  const getProductById = (productID) => {
    return products.find(product => product.id === productID)
  }

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
      products, 
      cart, 
      favorites, 
      addToCart, 
      decreaseQtyInCart, 
      removeFromCart,
      addToFavorites,
      removeFavorite,
      getProductById
    }}
    > 
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => useContext(ProductsContext) 