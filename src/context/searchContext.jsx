import { createContext, useContext, useState } from "react";

export const SearchContext = createContext({
    searchedValue: '', 
})

export function SearchProvider({children}){
  const [searchedValue, setSearchedValue] = useState('')

  return (
    <SearchContext.Provider value={{
      searchedValue,
      setSearchedValue
    }}
    > 
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext) 