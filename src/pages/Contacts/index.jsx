import "./Style.css";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import HeroDark from "../../assets/img/contact_dark_hero.png";
import HeroLight from "../../assets/img/contact_light_hero.png";
import FundoCardSec from "../../assets/img/Cópia de Banner -  pizza.png";
import QuoteImg from "../../assets/img/fallen.png";
import QuoteImg2 from "../../assets/img/anjo.png";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTypewriter } from "../../hooks/useTypewriter";

function Contacts() {
  const { lightMode } = useTheme();
  const revealRef = useScrollReveal();
  const [easterEgg, setEasterEgg] = useState(false);

  const titleText = lightMode ? "REACH OUT" : "SUMMON US";
  const { displayText, isDone } = useTypewriter(titleText, {
    speed: 110,
    startDelay: 400,
  });

  return (
    <div id="main-content" ref={revealRef}>
      <section className="hero" aria-label="Contact hero banner">
        <img
          src={lightMode ? HeroLight : HeroDark}
          alt={lightMode ? "Celestial garden with fountain" : "Misty graveyard with lantern"}
        />
        <div className="hero__fog" aria-hidden="true"></div>
        <div className="hero__grain" aria-hidden="true"></div>
        <div className="hero-text">
          <h1
            className="title glitch"
            data-text={titleText}
            aria-label={titleText}
            onMouseEnter={() => setEasterEgg(true)}
            onMouseLeave={() => setEasterEgg(false)}
          >
            {displayText}
            {!isDone && <span className="typewriter-cursor" aria-hidden="true" />}
          </h1>
          <p className="subtitle">
            {easterEgg
              ? lightMode
                ? "✦ You've been chosen by the light ✦"
                : "☠ The void has noticed you ☠"
              : lightMode
                ? "We await your message with open arms."
                : "Whisper into the void and await a reply."}
          </p>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="Quote_Section" aria-label="Contact introduction">
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
              "Whether you seek collaboration, guidance, or simply wish to share
              a vision — we are here. Choose your path below and let the
              conversation begin."
            </p>
          ) : (
            <p className="subtitle">
              "Whether through the flickering glow of a screen or the cold echo
              of a phone line — there are ways to find us. Choose your method
              below, if you dare."
            </p>
          )}
        </div>
      </section>

      <section
        className="Card_Section contact-grid"
        style={{ backgroundImage: `url(${FundoCardSec})` }}
        aria-label="Contact methods"
      >
        <a
          href="mailto:joaopedrolaurosaraiva@gmail.com"
          className="contact-card reveal--scale reveal--delay-1"
          aria-label="Send an email to joaopedrolaurosaraiva@gmail.com"
        >
          <div className="contact-icon">
            <MdEmail />
          </div>
          <h3 className="contact-label">EMAIL</h3>
          <p className="contact-detail">joaopedrolaurosaraiva@gmail.com</p>
        </a>

        <a
          href="https://github.com/joaosaraiva1999"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card reveal--scale reveal--delay-2"
          aria-label="Visit GitHub profile"
        >
          <div className="contact-icon">
            <FaGithub />
          </div>
          <h3 className="contact-label">GITHUB</h3>
          <p className="contact-detail">joaosaraiva1999</p>
        </a>

        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-saraiva-39a0b1296/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card reveal--scale reveal--delay-3"
          aria-label="Visit LinkedIn profile"
        >
          <div className="contact-icon">
            <FaLinkedin />
          </div>
          <h3 className="contact-label">LINKEDIN</h3>
          <p className="contact-detail">João Saraiva</p>
        </a>
      </section>

      <section
        className="Join_Section"
        style={{ backgroundImage: `url(${FundoCardSec})` }}
        aria-label="Call to action"
      >
        <div className="cta-content reveal">
          <h2 className="title">
            {lightMode ? "LET'S CONNECT" : "DARE TO REACH"}
          </h2>
          <a
            href="mailto:joaopedrolaurosaraiva@gmail.com"
            className="cta-button"
            aria-label="Send an email"
          >
            {lightMode ? "SEND A MESSAGE" : "WHISPER NOW"}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
