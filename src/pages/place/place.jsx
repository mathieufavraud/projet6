import { useParams } from "react-router-dom";
import data from "../../logements.json";
import Slideshow from "../../components/slideshow/slideshow.jsx";
import Collapse from "../../components/collapse/collapse.jsx";
import Tag from "../../components/tag/tag.jsx";
import Rating from "../../components/rating/rating.jsx";

/*
function Tagsbox () {
    return data.tags.map(tag => {
        return (
             <Tag key={tag} name={tag}></Tag>
        )
    })
}
*/

function Tagsbox (place) {
    return place.tags.map(tag => {
        return (
            <Tag key={tag} name={tag}></Tag>
       )
    })
}

function Place () {
    const { placeId } = useParams();
    const place = data.find(elem => elem.id===placeId);

    return (
            <main>
                <div className="place">
                    <section className="slidebox"><Slideshow key={place.id} pictures={place.pictures}></Slideshow></section>
                    <div className="place-infos">
                        <div className="place-infos-top">
                            <div className="place-infos-left">
                                <h1>{place.title}</h1>
                                <h2>{place.location}</h2>
                                <div className="tagsbox"><li>{Tagsbox(place)}</li></div>
                            </div>
                            <div className="place-infos-right">
                                <figure className="host">
                                    <figcaption>{place.host.name}</figcaption>
                                    <img src={place.host.picture} alt="photo du propriétaire" />
                                </figure>
                                <div className="ratingbox"><Rating></Rating></div>
                            </div>
                        </div>
                        <div className="place-infos-collapse">
                            <Collapse key={place.id+2} title="Description" content={place.description}></Collapse>
                            <Collapse key={place.id+3} title="Equipements"content={place.equipments}></Collapse>
                        </div>
                    </div>
                </div>
            </main>
            )
}

export default Place;

//changer la forme de la liste pour equipément et les caracteristiques de l'image pour qu'elle s'etale dans une dimension fixe

