import { Link } from "react-router-dom";
import "./Style.css";
import logo from "../../assets/img/horrorlogo.png";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { MdDarkMode, MdLightMode, MdDehaze } from 'react-icons/md';

export function Header(){
  const { lightMode, toggle } = useTheme();

  const toggleLightMode = () => {
    toggle();
  };

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  useEffect(() => {
    const navBar = document.getElementById('navBar');
    const onScroll = () => {
      if (window.scrollY > 200) {
        navBar.style.backgroundColor = 'var(--clr-dark)';
        navBar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.06)';
      } else {
        navBar.style.backgroundColor = 'transparent';
        navBar.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


    return (
      <nav id="navBar">
        <div className="logo_container"> 
          {lightMode ? <h1>LIGHT</h1> : <h1>DARK</h1>}
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
          <button className="btn_menu" onClick={openNav}>
            <MdDehaze />
          </button>
          <div className="btn_container">
            <button className="btn_darkmode" onClick={toggleLightMode}>
              {lightMode ? <MdDarkMode /> : <MdLightMode />}
            </button>
        </div>
        </div>
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <div className="overlay-content">
            <Link className="link_text" to="/" onClick={closeNav}>HOME</Link>
            <Link className="link_text" to="/about" onClick={closeNav}>ABOUT</Link>
            <Link className="link_text" to="/Contacts" onClick={closeNav}>CONTACT</Link>
          </div>
        </div>
      </nav>
    );
  }
export default Header;
