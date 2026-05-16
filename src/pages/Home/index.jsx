import "./Style.css";
import Hero from "../../assets/img/galeria.png";
import Hero2 from "../../assets/img/Galeria (1).png";
import FundoCardSec from "../../assets/img/Cópia de Banner -  pizza.png";
import { useTheme } from "../../context/ThemeContext";
import Card1 from "../../assets/img/card1.jpg";
import Card2 from "../../assets/img/card2.jpg";
import Card3 from "../../assets/img/card3.webp";
import Card4 from "../../assets/img/heaven1.png";
import Card5 from "../../assets/img/heaven2.png";
import Card6 from "../../assets/img/heaven3.png";
import QuoteImg from "../../assets/img/fallen.png";
import QuoteImg2 from "../../assets/img/anjo.png";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTypewriter } from "../../hooks/useTypewriter";
import { Link } from "react-router-dom";

function Home() {
  const { lightMode } = useTheme();
  const revealRef = useScrollReveal();

  const titleText = lightMode ? "YEHI OR" : "CHOSHEK";
  const { displayText, isDone } = useTypewriter(titleText, {
    speed: 120,
    startDelay: 400,
  });

  return (
    <div id="main-content" ref={revealRef}>
      <section className="hero" aria-label="Hero banner">
        <img
          src={lightMode ? Hero2 : Hero}
          alt={lightMode ? "Angelic figure in golden light" : "Dark gothic illustration"}
        />
        <div className="hero__fog" aria-hidden="true"></div>
        <div className="hero__grain" aria-hidden="true"></div>
        <div className="hero-text">
          <h1 className="title glitch" data-text={titleText} aria-label={titleText}>
            {displayText}
            {!isDone && <span className="typewriter-cursor" aria-hidden="true" />}
          </h1>
          <p className="subtitle">
            "One does not become enlightened by imagining figures of light, but
            by making the darkness conscious." – Carl Gustav Jung
          </p>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section
        className="Card_Section"
        style={{ backgroundImage: `url(${FundoCardSec})` }}
        aria-label="Gallery cards"
      >
        <div className="card reveal--scale reveal--delay-1">
          <img src={lightMode ? Card4 : Card1} alt="Dark artwork — solitude" />
        </div>
        <div className="card reveal--scale reveal--delay-2">
          <img src={lightMode ? Card5 : Card2} alt="Dark artwork — descent" />
        </div>
        <div className="card reveal--scale reveal--delay-3">
          <img src={lightMode ? Card6 : Card3} alt="Dark artwork — abyss" />
        </div>
      </section>

      <section className="Quote_Section" aria-label="Quote">
        <div className="card_img reveal--left">
          <img
            src={lightMode ? QuoteImg2 : QuoteImg}
            alt={lightMode ? "Angelic figure" : "Fallen angel illustration"}
          />
        </div>
        <div className="line" aria-hidden="true"></div>
        <div className="card_text reveal--right">
          {lightMode ? (
            <p className="subtitle">
              "Light is not only what reveals the world, but also what hides it;
              for in its brilliance, shadows are born, and in shadows, truth
              often rests unseen."
            </p>
          ) : (
            <p className="subtitle">
              "Darkness is not the enemy of light; it is the space where light
              finds meaning. Without the contrast of the void, brightness would
              be blind, and without the silence of shadow, the self would not
              hear itself."
            </p>
          )}
        </div>
      </section>

      <section
        className="Join_Section"
        style={{ backgroundImage: `url(${FundoCardSec})` }}
        aria-label="Call to action"
      >
        <div className="cta-content reveal">
          <h2 className="title">
            {lightMode ? "JOIN THE LIGHT" : "JOIN THIS SIDE"}
          </h2>
          <Link to="/Contacts" className="cta-button" aria-label="Go to contact page">
            {lightMode ? "REACH OUT" : "SUMMON US"}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
