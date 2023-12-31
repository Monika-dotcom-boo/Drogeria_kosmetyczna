import slide from '@/assets/main_picture.png';
import slide2 from '@/assets/main_picture2.png';
import slide3 from '@/assets/main_picture3.png';
import newBrands from '@/assets/new_brands.png';
import newsletter from '@/assets/newsletter.jpeg';
import popularProducts from '@/assets/popular_brands.png';
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Product from '@/components/Product';
import { useProducts } from '@/context/productsContext';
import { useSearch } from '@/context/searchContext';
import {useEffect, useState } from 'react';
import Api from "@/api/api"

function Home() {
    const slickConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    }
    const {products} = useProducts()
    const { searchedValue } = useSearch()

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [promoProducts, setPromoProducts] = useState(products);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddToNewsletter = async (e) => {
      try {
        e.preventDefault();

        if (!name || !email) {
          alert('Email and name is required!')
          return
        }

        const { error } = await Api
          .from('newsletter')
          .insert([
            { name, email},
          ])
        .select()

        if (!error) {
          setName('')
          setEmail('')
        } else {
          console.log('Error in adding entry to newsletter: ', error)
        }

      } catch (error) {
        console.log('Error in adding entry to newsletter: ', error)
      }
    }

    useEffect(() => {
      const filteredProducts = products.filter(product => {
        if (!searchedValue) {
          return true
        }
  
        return product.name.toLowerCase().includes(searchedValue.toLocaleLowerCase())
      })

      setFilteredProducts(filteredProducts)

      setPromoProducts(products.filter((product)=>{
        return !product.pricePromo
      }).filter(product => {
        if (!searchedValue) {
          return true
        }
  
        return product.name.toLowerCase().includes(searchedValue.toLocaleLowerCase())
      }))
  
    }, [products, searchedValue]);

    return (
      <>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
          <img src={slide} alt="cosmetic" />
          <img src={slide2} alt="cosmetic" />
          <img src={slide3} alt="cosmetic" />
        </Carousel>
        <div className="flex justify-center">
          <div className="flex justify-center align-center relative text-6xl text-black bg-white px-[30px] py-4 after:content-[' '] after:absolute after:right-full after:top-1/2 after:w-[70px] after:h-[1px] after:bg-[#d8d8d8] before:content-[' '] before:absolute before:left-full before:top-1/2 before:w-[70px] before:h-[1px] before:bg-[#d8d8d8]">
            Nowe marki
          </div>
        </div>
        <div className="flex justify-center">
          <img src={newBrands} alt="cosmetic" className="image-half" />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center align-center relative text-6xl text-black bg-white px-[30px] py-4 after:content-[' '] after:absolute after:right-full after:top-1/2 after:w-[70px] after:h-[1px] after:bg-[#d8d8d8] before:content-[' '] before:absolute before:left-full before:top-1/2 before:w-[70px] before:h-[1px] before:bg-[#d8d8d8]">
            Najpopularniejsze dziś
          </div>
        </div>
        <Slider {...slickConfig}>
          {filteredProducts ? filteredProducts.map((product) => (
            <Product key={`news-${product.id}`} id={product.id} name={product.name} category={product.category} price={product.price} pricePromo={product.pricePromo} image={product.image} />
          )) : null}
        </Slider>
        <div className="flex justify-center">
          <div className="flex justify-center align-center relative text-6xl text-black bg-white px-[30px] py-4 after:content-[' '] after:absolute after:right-full after:top-1/2 after:w-[70px] after:h-[1px] after:bg-[#d8d8d8] before:content-[' '] before:absolute before:left-full before:top-1/2 before:w-[70px] before:h-[1px] before:bg-[#d8d8d8]">
            Promocje
          </div>
        </div>
        <Slider {...slickConfig}>
          {promoProducts ? promoProducts.map((product) => (
            <Product key={`promo-${product.id}`} id={product.id} name={product.name} category={product.category} price={product.price} pricePromo={product.pricePromo} image={product.image} />
          )) : null}
        </Slider>
        <div className="flex justify-center">
          <div className="flex justify-center align-center relative text-6xl text-black bg-white px-[30px] py-4 after:content-[' '] after:absolute after:right-full after:top-1/2 after:w-[70px] after:h-[1px] after:bg-[#d8d8d8] before:content-[' '] before:absolute before:left-full before:top-1/2 before:w-[70px] before:h-[1px] before:bg-[#d8d8d8]">
            Popularne marki
          </div>
        </div>
        <img src={popularProducts} alt="cosmetic" />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-[#c5cbcb]"><img src={newsletter} className="block object-cover h-full translate-x-[-100px]" /></div>
          <section className="relative z-999 min-h-[480px] bg-contain bg-center bg-left flex justify-end">
            <form className="w-full lg:w-6/12 py-40" onSubmit={handleAddToNewsletter}>
              <div className="text-5xl text-center mb-10">
                Dołącz do społeczności
                {' '}
                <br />
                {' '}
                oraz do
                {' '}
                <span className="text-purple"> naszego Klubu Prenium </span>
              </div>
              <div className="text-7xl text-center mb-6">jest nas już kilkaset tysięcy</div>
              <div className="flex justify-center">
                <input value={name} onInput={(e) => setName(e.target.value)} type="text" placeholder="Twoje imię" className="w-[250px] px-[14px] py-[6px] pr-30 text-[1.4rem] leading-[1.42857143] h-[54.5px] focus:outline-none mr-4"   />
                <div className="">
                  <input value={email} onInput={(e) => setEmail(e.target.value)} type="text" placeholder="Twój email" className="w-[250px] px-[14px] py-[6px] pr-30 text-[1.4rem] leading-[1.42857143] h-[54.5px] focus:outline-none" />
                  <button className="bg-purple text-white border-[2px] border-purple border-solid px-[1.5rem] py-[1.3rem] text-[1.5rem]" type="submit">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div className="py-9 px-10">
          <section>
            <div className="text-purple my-6 text-3xl font-extrabold flex items-center justify-center  ">
              Drogeria z kosmetykami 
            </div> 
            <h1 className="text-xl my-6 font-extrabold text-purple block">Sklep internetowy z kosmetykami i perfumami </h1>
            <div className="text-xl font flex items-center justify-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro sunt maiores ipsa dicta. Nihil, delectus beatae in maxime accusamus quo ipsa laborum nam, modi reiciendis eius, laboriosam quibusdam illo aliquid.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro sunt maiores ipsa dicta. Nihil, delectus beatae in maxime accusamus quo ipsa laborum nam, modi reiciendis eius, laboriosam quibusdam illo aliquid.
              <br />
            </div>
          </section>
          <section>
            <h1 className="text-xl my-6 font-extrabold text-purple block">Duży wybór stworzony z myślą o kliencie </h1>
            <div className="text-xl font flex items-center justify-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est cupiditate, odit eius ipsum, sunt aut dolorum amet, aliquid debitis tempore nemo quisquam pariatur. Quisquam natus quod officiis doloribus odio.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia, dignissimos eum amet illum quisquam autem? Deleniti vitae omnis magnam, provident expedita hic! Excepturi quia quo exercitationem sunt ea? Sapiente.
              <br />
            </div>
          </section> 
          <section>
            <h1 className="text-xl my-6 font-extrabold text-purple block">Sposób na perfekcyjny makijaż </h1>
            <div className="text-xl font flex items-center justify-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi alias, maxime quidem voluptatibus assumenda, possimus officiis atque aspernatur ex suscipit fugiat, sapiente odio necessitatibus tempore officia consequuntur eos voluptas. 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae neque facilis aut assumenda excepturi quos voluptates error dolore vero! Recusandae temporibus placeat quaerat praesentium earum! Eveniet labore temporibus voluptates illo.
             
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eius ipsa nisi accusamus quas voluptatibus omnis ex ea! Quam aspernatur vero tempore perferendis molestiae excepturi beatae saepe obcaecati voluptas quae.
             
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum culpa sunt perspiciatis eum ad! Consectetur similique vitae voluptas nesciunt pariatur laborum accusantium quis ut fuga doloremque? Vero enim animi inventore.
             
              <br />
            </div>
          </section>
          <section>
            <h1 className="text-xl my-6 font-extrabold text-purple block">Dla Ciebie i Twojego domu </h1>
            <div className="text-xl font flex items-center justify-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse facilis cumque placeat quos excepturi quod magni iusto repudiandae beatae, dolor sit possimus veritatis rerum quis ab voluptates maiores sapiente.
              
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora impedit mollitia unde omnis quaerat dolorum accusamus quibusdam totam molestiae. Nemo, ipsa impedit. Doloribus repellendus iusto, vitae facere explicabo nostrum.
              
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non perferendis, et reiciendis fugit tenetur aut officiis eos assumenda. Ratione impedit quam totam sunt, blanditiis beatae quisquam corrupti laboriosam quaerat expedita.
             
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolorem tempore, sequi atque ipsam quam? Iusto in exercitationem, ducimus ipsa hic illum! Quis, ea rerum odit dignissimos dolorum voluptatem perferendis.
              
              <br />
            </div>
          </section>  
        </div>    
      </>
    )
}

export default Home