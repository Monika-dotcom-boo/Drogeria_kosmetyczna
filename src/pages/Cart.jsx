import { useProducts } from "../context/productsContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const { cart, addToCart, decreaseQtyInCart, removeFromCart, getProductById} = useProducts()

  return (
    <div className="py-10">
      <h2 className="text-5xl bold mb-10 text-center">Twój koszyk</h2>
      <table className="w-full">
        {cart ? cart.map(productInCart => (
          <tr className="border-b border-solid border-gray-400 text-xl">
            <td>
              <img className="max-w-[50px]" src={getProductById(productInCart.id).image} />
            </td>
            <td>{getProductById(productInCart.id).name}</td>
            <td className="text-center">
              <div>Price:</div>
              {getProductById(productInCart.id).pricePromo ?? getProductById(productInCart.id).price}
              {' '}
              zł
            </td>
            <td className="text-center">
              <div>Total:</div>
              {(getProductById(productInCart.id).pricePromo ?? getProductById(productInCart.id).price) * productInCart.qty}
              {' '}
              zł
            </td>
            <td className="text-center">
              <div>Quantity:</div>
              {productInCart.qty}
            </td>
            <td>
              <button onClick={() => addToCart(productInCart.id)} type="button">Increase</button>
            </td>
            <td>
              <button onClick={() => decreaseQtyInCart(productInCart.id)} type="button">Decrease</button>
            </td>
            <td>
              <FontAwesomeIcon className="cursor-pointer" size="xl" onClick={() => removeFromCart(productInCart.id)} icon={faXmark} />
            </td>
          </tr>
      )) : null}
      </table>
    </div>
  );
}

export default Cart;




