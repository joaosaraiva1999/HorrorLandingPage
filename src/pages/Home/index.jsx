import "./Style.css"
import Hero from "../../assets/img/galeria.png"
import Hero2 from "../../assets/img/Galeria (1).png"
import FundoCardSec from '../../assets/img/Cópia de Banner -  pizza.png'
import { useTheme } from '../../context/ThemeContext';
import Card1 from '../../assets/img/card1.jpg'
import Card2 from '../../assets/img/card2.jpg'
import Card3 from '../../assets/img/card3.webp'
import Card4 from "../../assets/img/heaven1.png";
import Card5 from "../../assets/img/heaven2.png";
import Card6 from "../../assets/img/heaven3.png";
import QuoteImg from '../../assets/img/fallen.png'
import QuoteImg2 from '../../assets/img/anjo.png'

function Home() {
  const { lightMode } = useTheme();

  return (
    <div>


        <section className="hero">
        <img
          src={lightMode ? Hero2 : Hero}
          alt="Hero Image"
        />
        <div className="hero-text">
          {lightMode ? <h1 className="title">YEHI OR</h1> : <h1 className="title">CHOSHEK</h1>}
          <p className="subtitle">"One does not become enlightened by imagining figures of light, but by making the darkness conscious." – Carl Gustav Jung</p>
        </div>
      </section>
      <section className="Card_Section" style={{ backgroundImage: `url(${FundoCardSec})` }}>
        <div className="card">
          <img src={lightMode ? Card4 : Card1} alt="Card 1" />
        </div>
        <div className="card">
          <img src={lightMode ? Card5 : Card2} alt="Card 2" />
        </div>
        <div className="card">
          <img src={lightMode ? Card6 : Card3} alt="Card 3" />
        </div>
      </section>
      <section className="Quote_Section">
        <div className="card_img">
          <img src={ lightMode ? QuoteImg2 : QuoteImg} alt="Quote Image" />
        </div>
        <div className="line"></div>
        <div className="card_text">
          {lightMode ? <p className="subtitle">"Light is not only what reveals the world, but also what hides it; for in its brilliance, shadows are born, and in shadows, truth often rests unseen."</p> : <p className="subtitle">"Darkness is not the enemy of light; it is the space where light finds meaning. Without the contrast of the void, brightness would be blind, and without the silence of shadow, the self would not hear itself."</p>}
        </div>
      </section>
      <section className="Join_Section" style={{ backgroundImage: `url(${FundoCardSec})` }}>
        <h1 className="title">JOIN THIS SIDE</h1>
      </section>
    </div>
  )
}

export default Home
