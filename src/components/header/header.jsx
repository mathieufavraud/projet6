import { Link } from "react-router-dom";
import logo from "../../assets/KASA.svg";
import "../../styles/index.scss";

function Header() {
  return (
    <nav>
      <img src={logo} alt="logo KASA"></img>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="about">A Propos</Link>
      </div>
    </nav>
  );
}

export default Header;
