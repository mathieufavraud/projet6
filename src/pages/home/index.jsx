import Banner from "../../components/banner/banner.jsx";
import Card from "../../components/card/card.jsx";
import data from "../../logements.json";
import "../../styles/index.scss";

function CardBox() {
  return data.map(place => {
    return(<Card key={place.id} title={place.title} image={place.cover}></Card>)
  })
}

function MainPage() {
  return (
    <main>
      <div><Banner></Banner></div>
      <div className="cardbox">{CardBox()}</div>
    </main> 
  );
}

export default MainPage;