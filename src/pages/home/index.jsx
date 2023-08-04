//Page principale, avec les cartes

import Banner from "../../components/banner/banner.jsx";
import Card from "../../components/card/card.jsx";
import background from "../../assets/banner.png";
import data from "../../logements.json";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

function CardBox() {
  return data.map(place => {
    return(
      <Link to={"place/"+place.id}>
        <Card key={place.id} title={place.title} image={place.cover}></Card>
      </Link>
    )
  })
}

function MainPage() {
  return (
    <main>
      <section className="bannerbox"><Banner key="banner" image={background} text="Chez vous, partout et ailleurs"></Banner></section>
      <section className="cardbox"><div>{CardBox()}</div></section>
    </main> 
  );
}

export default MainPage;