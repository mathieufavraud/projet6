//Page principale, avec les cartes

import Banner from "../../components/banner/banner.jsx";
import "../../components/banner/banner.scss";
import Card from "../../components/card/card.jsx";
import "../../components/card/card.scss";
import background from "../../assets/banner.png";
import data from "../../logements.json";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import "./home.scss";



const MainPage = () => {
  const CardBox = () => {
    return data.map(place => {
      return(
        <Link key={`link${place.id}`} to={"place/"+place.id}> 
          <Card key={place.id} title={place.title} image={place.cover}></Card>
        </Link>
      )
    })
  }
  return (
    <main>
      <div className="bannerbox"><Banner key="banner" image={background} text="Chez vous, partout et ailleurs"></Banner></div>
      <div className="cardbox">{CardBox()}</div>
    </main> 
  );
}

export default MainPage;