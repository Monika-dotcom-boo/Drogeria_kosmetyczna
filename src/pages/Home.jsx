import slide from '../assets/main_picture.png';
import slide2 from '../assets/main_picture2.png';
import slide3 from '../assets/main_picture3.png';
import cosmetic from '../assets/collistar.png';
import cosmetic2 from '../assets/dolce.png';
import cosmetic3 from '../assets/garnier.png';
import cosmetic4 from '../assets/joico.png';
import cosmetic5 from '../assets/loreal.png';
import cosmetic6 from '../assets/milk.png';
import cosmetic7 from '../assets/miya.png';
import cosmetic8 from '../assets/batiste.png';
import cosmetic9 from '../assets/bell.png';
import cosmetic10 from '../assets/claresa.png';
import cosmetic11 from '../assets/dax.png';
import cosmetic12 from '../assets/loreal2.png';
import cosmetic13 from '../assets/loreal3.png';
import cosmetic14 from '../assets/nivea.png';
import cosmetic15 from '../assets/skin.png';
import newBrands from '../assets/new_brands.png';
import newsletter from '../assets/newsletter.jpeg';
import popularProducts from '../assets/popular_brands.png';
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

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
        <div className="flex justify-center">
          <div className="headline-name"> Popularne marki </div>
        </div>
        <img src={popularProducts} alt="cosmetic" />
        <section className="newsletter" style={{background: `url(${newsletter})`}}>
          {/* teksty z formularzem */}
          {' '}
          pp
        </section>

        <div className="home-content">
          <section>
            <div className="PageTitle">
              Drogeria z kosmetykami eZebra
            </div> 
            <h1 className="first">Sklep internetowy z kosmetykami i perfumami ezebra.pl </h1>
            <div className="one">
              Znajdziesz tu wyjątkowo bogaty asortyment, taki, który uwzględnia potrzeby wszystkich Klientów. Zarówno te cenowe, jak i związane z różnorodnością produktów. Artykuły drogerii internetowej ezebra.pl podzielone zostały na kilka kategorii, co zdecydowanie ułatwia zakupy i pozwala zaoszczędzić czas.
              <br />
              Odpowiadając na potrzeby Klientów drogeria rozwija swój asortyment i wprowadza do niego kolejne produkty oraz kategorie. Wśród nich znajdują się następujące grupy produktów: Makijaż, Pielęgnacja, Paznokcie, Akcesoria, Perfumy, Zdrowie, Dom, Men, Zestawy Prezentowe, Promocje, Nowości oraz Soczewki.
              <br />
            </div>
          </section>
          <section>
            <h1 className="first">Duży wybór stworzony z myślą o kliencie </h1>
            <div className="one">
              Miłośnicy i miłośniczki pięknych zapachów mogą natomiast skorzystać z oferty przygotowanej w zakładce perfumy. Proste w obsłudze i intuicyjne filtry pozwolą dobrać jeden lub kilka flakoników perfum damskich, męskich lub unisex. Bez trudu znajdziesz tutaj to, czego szukasz. Możesz też zestawić dany produkt z innymi.
              <br />
              Jeżeli jeszcze nie wiesz, na co warto się zdecydować, albo wahasz się między jednymi a drugimi kosmetykami, tutaj bez trudu znajdziesz wszelkie potrzebne Ci informacje. A to za sprawą dokładnego i wyczerpującego opisu. Między innymi na temat poszczególnych nut zapachowych.
              <br />
            </div>
          </section> 
          <section>
            <h1 className="first">Sposób na perfekcyjny makijaż </h1>
            <div className="one">
              Dzięki gamie produktów do makijażu dostępnych w drogerii eZebra, każdy make-up zostanie wykonany w sposób perfekcyjny. 
              Miłośniczki takich kosmetyków mogą wybierać wśród: produktów do pielęgnacji ust, pomadek i szminek, błyszczyków, palety cieni do powiek, korektorów, kredek do oczu, podkładów i kremów BB, CC i wielu innych. Co więcej, ceny są tutaj bardzo konkurencyjne, nawet po uwzględnieniu kosztów przesyłki.
              <br />
              Warto na bieżąco sprawdzać aktualne okazje umieszczane w zakładce promocje. Kilku, a nawet kilkudziesięciozłotowe obniżki cen stanowią propozycje, które koniecznie musisz wziąć pod uwagę podczas robienia kolejnych zakupów w sieci. 
              {' '}
              <br />
              Dużym ułatwieniem dla każdego, kto odwiedza sklep, jest możliwość wyszukiwania produktów za pomocą wybranych marek. Wśród nich znalazły się m.in.: L'Oreal Paris, Max Factor czy Revlon Professional. 
              {' '}
              <br />
              Potrzebujesz kosmetyków? To miejsce jest dla Ciebie! 
              {' '}
              <br />
            </div>
          </section>
          <section>
            <h1 className="first">Dla Ciebie i Twojego domu </h1> 
            <div className="one">
              Dopełnienie całości stanowi zakładka z akcesoriami. Zestawy do manicure, lusterka kosmetyczne, szczotki do włosów, spinki do włosów i wiele innych tego typu produktów znajdziesz w jednym miejscu. 
              {' '}
              <br />
              Akcesoria to również pędzle do makijażu topowych marek. Kupisz je bez potrzeby wyprawy do galerii handlowej. I co ważne, będziesz mieć wystarczającą ilość czasu, aby dokładnie zapoznać się z ich opisem i charakterystyką. 
              {' '}
              <br />
              Produkty dostępne w ezebra.pl to jednak nie tylko kosmetyki dla Ciebie, ale również dla Twojego domu. W zakładce Dom znajdziesz m.in. artykuły do aromaterapii, środki czystości czy odświeżacze. 
              {' '}
              <br />
              Drogeria ezebra.pl zadba również o Twoją formę psychiczną i fizyczną. W zakładce zdrowie znajdziesz m.in. zdrową żywność oraz suplementy diety. Jeżeli zależy Ci na tym, aby zadbać o swój wygląd, zdrowie i atmosferę w domu eZebra jest dobrym miejscem na zrobienie kompleksowych zakupów. 
              {' '}
              <br />
            </div>
          </section>  
        </div>    
      </>
    )
}

export default Home