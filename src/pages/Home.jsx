import slide from '../assets/main_picture.png';
import slide2 from '../assets/main_picture2.png';
import slide3 from '../assets/main_picture3.png';
import cosmetic from '../../public/Bielenda.png';
import cosmetic2 from '../../public/Dolce_Gabana.png';
import cosmetic3 from '../../public/Catrice.png';
import cosmetic4 from '../../public/Dr._Irena.png';
import cosmetic5 from '../../public/Garnier.png';
import cosmetic6 from '../../public/Golden_rose.png';
import cosmetic7 from '../../public/Lirene.png';
import cosmetic8 from '../../public/Mexx.png';
import cosmetic9 from '../../public/Skyn.png';
import cosmetic10 from '../../public/Gilette.png';
import cosmetic11 from '../../public/Dr._Irena.png';
import cosmetic12 from '../../public/Golden_rose2.png';
import cosmetic13 from '../../public/Kanu.png';
import cosmetic14 from '../../public/Naomi.png';
import cosmetic15 from '../../public/Nivea.png';
import newBrands from '../assets/new_brands.png';
import newsletter from '../assets/newsletter.jpeg';
import popularProducts from '../assets/popular_brands.png';
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {love} from '@fortawesome/free-solid-svg-icons';

function Home() {
    const slickConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
      <>
        <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
          <img src={slide} alt="cosmetic" />
          <img src={slide2} alt="cosmetic" />
          <img src={slide3} alt="cosmetic" />
        </Carousel>
        <div className="flex justify-center">
          <div className="headline-name">Nowe marki</div>
        </div>
        <div className="flex justify-center">
          <img src={newBrands} alt="cosmetic" className="image-half" />
        </div>
        <div className="flex justify-center">
          <div className="headline-name">Najpopularniejsze dziś</div>
        </div>
        <Slider {...slickConfig}>
          <img src={cosmetic} alt="cosmetic" />
          <img src={cosmetic2} alt="cosmetic" />
          <img src={cosmetic3} alt="cosmetic" />
          <img src={cosmetic4} alt="cosmetic" />
          <img src={cosmetic5} alt="cosmetic" />
          <img src={cosmetic5} alt="cosmetic" />
          <img src={cosmetic6} alt="cosmetic" />
          <img src={cosmetic7} alt="cosmetic" />
          <img src={cosmetic} alt="cosmetic" />
        </Slider>
        <div className="flex justify-center">
          <div className="headline-name">Promocje</div>
        </div>
        <div className="love"> 
          <img src={love} alt="love" />
          <Slider {...slickConfig}>
            <img src={cosmetic8} alt="cosmetic" />
            <img src={cosmetic9} alt="cosmetic" />
            <img src={cosmetic10} alt="cosmetic" />
            <img src={cosmetic11} alt="cosmetic" />
            <img src={cosmetic12} alt="cosmetic" />
            <img src={cosmetic13} alt="cosmetic" />
            <img src={cosmetic14} alt="cosmetic" />
            <img src={cosmetic15} alt="cosmetic" />
          </Slider>
        </div>
        <div className="flex justify-center">
          <div className="headline-name"> Popularne marki </div>
        </div>
        <img src={popularProducts} alt="cosmetic" />
        <div className="relative">
          <div className="absolute newsletter-bg"><img src={newsletter} className="newsletter-image" /></div>
          <section className="newsletter flex justify-end">
            <form className="w-6/12 py-40">
              <div className="text-5xl text-center mb-10">
                Dołącz do społeczności
                {' '}
                <br />
                {' '}
                oraz do 
                {' '}
                <span className="purple-color"> naszego Klubu Prenium </span>
              </div> 
              <div className="text-7xl text-center mb-6">jest nas już kilkaset tysięcy</div>
              <div className="flex justify-center">
                <input type="text" placeholder="Twoje imię" className="standard-input mr-4"   />
                <div className="">
                  <input type="text" placeholder="Twój email" className="standard-input" />
                  <button className="arrow-button" type="submit">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div className="home-content">
          <section>
            <div className="PageTitle">
              Drogeria z kosmetykami 
            </div> 
            <h1 className="first">Sklep internetowy z kosmetykami i perfumami </h1>
            <div className="one">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro sunt maiores ipsa dicta. Nihil, delectus beatae in maxime accusamus quo ipsa laborum nam, modi reiciendis eius, laboriosam quibusdam illo aliquid.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro sunt maiores ipsa dicta. Nihil, delectus beatae in maxime accusamus quo ipsa laborum nam, modi reiciendis eius, laboriosam quibusdam illo aliquid.
              <br />
            </div>
          </section>
          <section>
            <h1 className="first">Duży wybór stworzony z myślą o kliencie </h1>
            <div className="one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est cupiditate, odit eius ipsum, sunt aut dolorum amet, aliquid debitis tempore nemo quisquam pariatur. Quisquam natus quod officiis doloribus odio.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia, dignissimos eum amet illum quisquam autem? Deleniti vitae omnis magnam, provident expedita hic! Excepturi quia quo exercitationem sunt ea? Sapiente.
              <br />
            </div>
          </section> 
          <section>
            <h1 className="first">Sposób na perfekcyjny makijaż </h1>
            <div className="one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi alias, maxime quidem voluptatibus assumenda, possimus officiis atque aspernatur ex suscipit fugiat, sapiente odio necessitatibus tempore officia consequuntur eos voluptas. 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae neque facilis aut assumenda excepturi quos voluptates error dolore vero! Recusandae temporibus placeat quaerat praesentium earum! Eveniet labore temporibus voluptates illo.
              {' '}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eius ipsa nisi accusamus quas voluptatibus omnis ex ea! Quam aspernatur vero tempore perferendis molestiae excepturi beatae saepe obcaecati voluptas quae.
              {' '}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum culpa sunt perspiciatis eum ad! Consectetur similique vitae voluptas nesciunt pariatur laborum accusantium quis ut fuga doloremque? Vero enim animi inventore.
              {' '}
              <br />
            </div>
          </section>
          <section>
            <h1 className="first">Dla Ciebie i Twojego domu </h1> 
            <div className="one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse facilis cumque placeat quos excepturi quod magni iusto repudiandae beatae, dolor sit possimus veritatis rerum quis ab voluptates maiores sapiente.
              {' '}
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora impedit mollitia unde omnis quaerat dolorum accusamus quibusdam totam molestiae. Nemo, ipsa impedit. Doloribus repellendus iusto, vitae facere explicabo nostrum.
              {' '}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non perferendis, et reiciendis fugit tenetur aut officiis eos assumenda. Ratione impedit quam totam sunt, blanditiis beatae quisquam corrupti laboriosam quaerat expedita.
              {' '}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolorem tempore, sequi atque ipsam quam? Iusto in exercitationem, ducimus ipsa hic illum! Quis, ea rerum odit dignissimos dolorum voluptatem perferendis.
              {' '}
              <br />
            </div>
          </section>  
        </div>    
      </>
    )
}

export default Home