// Génération du pied de page

import logo from "../../assets/KASA white.svg";
import "../../styles/index.scss";

function Footer () {
    return(
        <footer>
            <img src={logo} alt="logo KASA"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;