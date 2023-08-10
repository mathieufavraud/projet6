// Génération de l'en tête de page

import { Link } from "react-router-dom";
import logo from "../../assets/KASA.svg";
import "../../styles/index.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo KASA"></img>
      </Link>
      <nav>
        <div>
          <Link to="/">Accueil</Link>
          <Link to="about">A Propos</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;