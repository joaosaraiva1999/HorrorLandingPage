import "./Style.css";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const { lightMode } = useTheme();
  const [easterEgg, setEasterEgg] = useState(false);

  return (
    <footer role="contentinfo">
      <div className="footer-socials">
        <a
          href="mailto:joaopedrolaurosaraiva@gmail.com"
          aria-label="Send email"
          className="footer-social-link"
        >
          <MdEmail />
        </a>
        <a
          href="https://github.com/joaosaraiva1999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="footer-social-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-saraiva-39a0b1296/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="footer-social-link"
        >
          <FaLinkedin />
        </a>
      </div>

      <p
        className="footer_text"
        onMouseEnter={() => setEasterEgg(true)}
        onMouseLeave={() => setEasterEgg(false)}
      >
        {easterEgg
          ? lightMode
            ? "✦ The light remembers your presence ✦"
            : "☠ The darkness knows your name ☠"
          : "© 2025 João Saraiva — All Rights Reserved."}
      </p>
    </footer>
  );
}

export default Footer;
