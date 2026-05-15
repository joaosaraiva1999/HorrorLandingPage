import { Link } from "react-router-dom";
import "./Style.css";
import { useEffect, useCallback, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { MdDarkMode, MdLightMode, MdDehaze, MdClose } from "react-icons/md";

export function Header() {
  const { lightMode, toggle } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const navBar = document.getElementById("navBar");
    const onScroll = () => {
      if (window.scrollY > 200) {
        navBar.classList.add("nav--scrolled");
      } else {
        navBar.classList.remove("nav--scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openNav = useCallback(() => setNavOpen(true), []);
  const closeNav = useCallback(() => setNavOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && navOpen) closeNav();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navOpen, closeNav]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navOpen]);

  return (
    <>
      <a className="skip-to-content" href="#main-content">
        Skip to content
      </a>

      <nav id="navBar" role="navigation" aria-label="Main navigation">
        <div className="logo_container">
          <Link to="/" aria-label="Home">
            {lightMode ? <h1>LIGHT</h1> : <h1>DARK</h1>}
          </Link>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link className="link_text" to="/">HOME</Link>
            </li>
            <li>
              <Link className="link_text" to="/about">ABOUT</Link>
            </li>
            <li>
              <Link className="link_text" to="/Contacts">CONTACT</Link>
            </li>
          </ul>

          <button
            className="btn_menu"
            onClick={openNav}
            aria-label="Open navigation menu"
            aria-expanded={navOpen}
          >
            <MdDehaze />
          </button>

          <div className="btn_container">
            <button
              className="btn_darkmode"
              onClick={toggle}
              aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            >
              {lightMode ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`sidebar-overlay ${navOpen ? "sidebar-overlay--open" : ""}`}
        onClick={closeNav}
        aria-hidden={!navOpen}
      />
      <aside
        className={`sidebar ${navOpen ? "sidebar--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          className="sidebar__close"
          onClick={closeNav}
          aria-label="Close navigation menu"
        >
          <MdClose />
        </button>

        <nav className="sidebar__nav">
          <Link className="sidebar__link" to="/" onClick={closeNav}>
            <span className="sidebar__link-number">01</span>
            <span className="sidebar__link-text">HOME</span>
          </Link>
          <Link className="sidebar__link" to="/about" onClick={closeNav}>
            <span className="sidebar__link-number">02</span>
            <span className="sidebar__link-text">ABOUT</span>
          </Link>
          <Link className="sidebar__link" to="/Contacts" onClick={closeNav}>
            <span className="sidebar__link-number">03</span>
            <span className="sidebar__link-text">CONTACT</span>
          </Link>
        </nav>

        <div className="sidebar__footer">
          <p>{lightMode ? "✦ Follow the light" : "☠ Embrace the dark"}</p>
        </div>
      </aside>
    </>
  );
}

export default Header;
