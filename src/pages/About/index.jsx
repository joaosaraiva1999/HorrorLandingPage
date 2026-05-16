import "./Style.css";
import { useTheme } from "../../context/ThemeContext";
import HeroDark from "../../assets/img/about_dark_hero.png";
import HeroLight from "../../assets/img/about_light_hero.png";
import FundoCardSec from "../../assets/img/Cópia de Banner -  pizza.png";
import CardDark1 from "../../assets/img/about_card_dark1.png";
import CardDark2 from "../../assets/img/about_card_dark2.png";
import CardDark3 from "../../assets/img/about_card_dark3.png";
import CardLight1 from "../../assets/img/about_card_light1.png";
import CardLight2 from "../../assets/img/about_card_light2.png";
import CardLight3 from "../../assets/img/about_card_light3.png";
import QuoteImg from "../../assets/img/fallen.png";
import QuoteImg2 from "../../assets/img/anjo.png";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTypewriter } from "../../hooks/useTypewriter";
import { Link } from "react-router-dom";

function About() {
  const { lightMode } = useTheme();
  const revealRef = useScrollReveal();

  const titleText = lightMode ? "REVELATION" : "THE ABYSS";
  const { displayText, isDone } = useTypewriter(titleText, {
    speed: 100,
    startDelay: 400,
  });

  return (
    <div id="main-content" ref={revealRef}>
      <section className="hero" aria-label="About hero banner">
        <img
          src={lightMode ? HeroLight : HeroDark}
          alt={lightMode ? "Angelic temple in divine light" : "Dark gothic cathedral"}
        />
        <div className="hero__fog" aria-hidden="true"></div>
        <div className="hero__grain" aria-hidden="true"></div>
        <div className="hero-text">
          <h1 className="title glitch" data-text={titleText} aria-label={titleText}>
            {displayText}
            {!isDone && <span className="typewriter-cursor" aria-hidden="true" />}
          </h1>
          <p className="subtitle">
            {lightMode
              ? "Where light meets purpose and truth is born from radiance."
              : "Where darkness meets creation and shadows whisper ancient truths."}
          </p>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="Quote_Section" aria-label="Our story">
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
              "Born from a spark of divine curiosity, this project emerged as a
              testament to the beauty found in duality — the interplay between
              shadow and radiance. Every pixel is a prayer, every animation a
              hymn to the artistry of the digital realm."
            </p>
          ) : (
            <p className="subtitle">
              "Born from the shadows of a restless mind, this project emerged
              from the depths of sleepless nights and whispered code. Every pixel
              carries the weight of obsession — a relentless pursuit to capture
              the essence of darkness in digital form."
            </p>
          )}
        </div>
      </section>

      <section
        className="Card_Section"
        style={{ backgroundImage: `url(${FundoCardSec})` }}
        aria-label="Gallery — vision, obsession, legacy"
      >
        <div className="card reveal--scale reveal--delay-1">
          <img src={lightMode ? CardLight1 : CardDark1} alt="Vision" />
        </div>
        <div className="card reveal--scale reveal--delay-2">
          <img src={lightMode ? CardLight2 : CardDark2} alt="Obsession" />
        </div>
        <div className="card reveal--scale reveal--delay-3">
          <img src={lightMode ? CardLight3 : CardDark3} alt="Legacy" />
        </div>
      </section>

      <section className="Quote_Section about-reversed" aria-label="The creator">
        <div className="card_text reveal--left">
          {lightMode ? (
            <p className="subtitle">
              "The creator walks the boundary between worlds, drawing from
              celestial visions and earthly craft. What you see here is not
              merely a website — it is a portal, a bridge between the mundane
              and the transcendent."
            </p>
          ) : (
            <p className="subtitle">
              "The creator walks the thin line between sanity and madness,
              drawing from ancient aesthetics and modern nightmares. What you see
              here is not merely a website — it is a ritual, a summoning of
              visual terrors that linger long after you've looked away."
            </p>
          )}
        </div>
        <div className="line" aria-hidden="true"></div>
        <div className="card_img reveal--right">
          <img
            src={lightMode ? QuoteImg2 : QuoteImg}
            alt={lightMode ? "Angelic guide" : "Dark fallen angel"}
          />
        </div>
      </section>

      <section
        className="Join_Section"
        style={{ backgroundImage: `url(${FundoCardSec})` }}
        aria-label="Call to action"
      >
        <div className="cta-content reveal">
          <h2 className="title">
            {lightMode ? "EMBRACE THE LIGHT" : "FACE THE DARK"}
          </h2>
          <Link to="/Contacts" className="cta-button" aria-label="Go to contact page">
            {lightMode ? "CONNECT" : "ENTER"}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
