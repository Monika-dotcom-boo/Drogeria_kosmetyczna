import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

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

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSearch = () => useContext(SearchContext) 