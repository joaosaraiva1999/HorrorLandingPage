import { Link } from "react-router-dom";
import "./Style.css";
import logo from "../../assets/img/horrorlogo.png";

function Header() {
  return (
    <nav>
      <div className="logo_container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
