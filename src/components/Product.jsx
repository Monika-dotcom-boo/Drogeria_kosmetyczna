import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons';


function Product({
  id, name, brand, category, price, image 
}) {
    return (
      <div className="product">
        <div className="flex justify-between px-20">
          <FontAwesomeIcon icon={faCartShopping} size="2xl" /> 
          <FontAwesomeIcon icon={faHeart} size="2xl" /> 
        </div>
        <img src={image} />
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