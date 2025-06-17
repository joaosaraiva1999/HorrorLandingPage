import { Link } from "react-router-dom";
import "./Style.css";
import logo from "../../assets/img/horrorlogo.png";
import { useEffect } from "react";

export function Header(){
  useEffect(() => {
    
      const navBar = document.getElementById('navBar');
  
      window.addEventListener('scroll', function () {
          if (window.scrollY > 50) {
              navBar.style.backgroundColor = 'black';
          } else if (window.scrollY == 0) {
              navBar.style.backgroundColor = 'transparent';
          }
  
      });

  }, [])

  return (
    <nav id="navBar">
      <div className="logo_container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link className="link_text" to="/">Home</Link>
          </li>
          <li>
            <Link className="link_text" to="/about">Sobre</Link>
          </li>
          <li>
            <Link className="link_text" to="/Contacts">Contactos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
