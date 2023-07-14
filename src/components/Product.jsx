import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useProducts } from '../context/productsContext';


function Product({
  id, name, brand, category, price, image 
}) {
    const {addToCart, addToFavorites} = useProducts()

    return (
      <div className="product">
        <div className="flex justify-between px-20">
          <FontAwesomeIcon 
            className="cursor-pointer"
            onClick={() => addToCart(id)} 
            icon={faCartShopping} size="2xl"
          /> 
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={() => addToFavorites(id)}
            icon={faHeart} size="2xl"
          /> 
        </div>
        <div className="flex justify-center">
          <img className="max-h-[260px]" src={image} />
        </div>
        <div className=" text-2xl text-center uppercase ">  
          {name}
        </div>
        <div className=" text-2xl text-center uppercase">  
          {brand}
        </div>
        <div className=" text-2xl text-center uppercase">  
          {category}
        </div>
        <div className=" text-4xl text-center font-bold purple-color mt-14">  
          {price}
          {' '}
          zł
        </div>
      </div>
    )
}

export default Product 