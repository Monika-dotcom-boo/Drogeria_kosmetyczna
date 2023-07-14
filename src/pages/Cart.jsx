import { useProducts } from "../context/productsContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const { cart, addToCart, decreaseQtyInCart, removeFromCart, getProductById, favorites, removeFavorite} = useProducts()

  return (
    <div className="py-20">
      <h2 className="text-5xl font-bold mb-10 text-center">Twój koszyk</h2>
      <table className="w-full mb-20">
        {cart ? cart.map(productInCart => (
          <tr className="border-b border-solid border-gray-400 text-xl">
            <td>
              <img className="max-w-[50px]" src={getProductById(productInCart.id).image} />
            </td>
            <td>{getProductById(productInCart.id).name}</td>
            <td className="text-center">
              <div className="font-bold">Cena:</div>
              {getProductById(productInCart.id).pricePromo ?? getProductById(productInCart.id).price}
              {' '}
              zł
            </td>
            <td className="text-center">
              <div className="font-bold">Razem:</div>
              {(getProductById(productInCart.id).pricePromo ?? getProductById(productInCart.id).price) * productInCart.qty}
              {' '}
              zł
            </td>
            <td className="text-center">
              <FontAwesomeIcon className="cursor-pointer" size="xl" onClick={() => addToCart(productInCart.id)} icon={faArrowUp} />
            </td>
            <td className="text-center">
              <div className="font-bold">Ilość:</div>
              {productInCart.qty}
            </td>
            <td className="text-center">
              <FontAwesomeIcon className="cursor-pointer" size="xl" onClick={() => decreaseQtyInCart(productInCart.id)} icon={faArrowDown} />
            </td>
            <td className="text-right pr-5">
              <FontAwesomeIcon className="cursor-pointer" size="xl" onClick={() => removeFromCart(productInCart.id)} icon={faXmark} />
            </td>
          </tr>
      )) : null}
      </table>

      <h2 className="text-5xl font-bold mb-10 text-center">Twóje ulubione</h2>
      <table className="w-full">
        {favorites ? favorites.map(productInFavorites => (
          <tr className="border-b border-solid border-gray-400 text-xl">
            <td>
              <img className="max-w-[50px]" src={getProductById(productInFavorites).image} />
            </td>
            <td>{getProductById(productInFavorites).name}</td>
            <td className="text-center">
              <div className="font-bold">Cena:</div>
              {getProductById(productInFavorites).pricePromo ?? getProductById(productInFavorites).price}
              {' '}
              zł
            </td>
            <td className="text-right pr-5">
              <FontAwesomeIcon className="cursor-pointer" size="xl" onClick={() => removeFavorite(productInFavorites)} icon={faXmark} />
            </td>
          </tr>
      )) : null}
      </table>
    </div>
  );
}

export default Cart;




