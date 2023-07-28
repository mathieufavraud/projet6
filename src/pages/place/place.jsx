import { useParams } from "react-router-dom";
import data from "../../logements.json";
import Slideshow from "../../components/slideshow/slideshow.jsx";
import Collapse from "../../components/collapse/collapse.jsx"

function Place () {
    const { placeId } = useParams();
    const place = data.find(elem => elem.id===placeId)

    return (
            <main>
                <div className="place">
                    <section className="slidebox"><Slideshow key={place.id} pictures={place.pictures}></Slideshow></section>
                    <div className="place-infos">
                        <div className="place-infos-top">
                            <div className="place-infos-left">
                                <h1>{place.title}</h1>
                                <p>{place.location}</p>
                                <p>tags</p> 
                            </div>
                            <div className="place-infos-right">
                                <figure className="host">
                                    <figcaption>{place.host.name}</figcaption>
                                    <img src={place.host.picture} alt="photo du propriétaire" />
                                </figure>
                                <p>rating</p>
                            </div>
                        </div>
                        <div className="place-infos-collapse">
                            <Collapse key={place.id+1} title="Description" content={place.description}></Collapse>
                            <Collapse key={place.id+2} title="Equipements"content={place.equipments}></Collapse>
                        </div>
                    </div>
                </div>
            </main>
            )
}

export default Place;

