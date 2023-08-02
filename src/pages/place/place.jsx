//Page d'un logement, avec les composants collapse, slideshow, tag et rating

import { useParams, useNavigate } from "react-router-dom";
import data from "../../logements.json";
import Slideshow from "../../components/slideshow/slideshow.jsx";
import Collapse from "../../components/collapse/collapse.jsx";
import Tag from "../../components/tag/tag.jsx";
import Rating from "../../components/rating/rating.jsx";

function Tagsbox (place) {
    return place.tags.map((tag) => {
        return (
            <Tag key={tag.tabIndex} name={tag}></Tag>
       )
    })
}

function Ratingbox (rating) {
    return rating.map(rank => {
        return (
            <Rating display={rank}></Rating>
        )
    })
}

function Place () {
    let { placeId } = useParams();
    let place = data.find(elem => elem.id===placeId);
    let navigate = useNavigate();

    if(place===undefined) //cas d'un ID non existant
    {
        navigate("/error");
        // ne fonctionne pas correctement
    }
    else
    {
        let equipement = place.equipments.map(item => <li>{item}</li>);
        let content = <ul>{equipement}</ul>;
        let stars = [false, false, false, false, false];

        for (let i=0; i<place.rating; i++)
        {
            stars[i]=true;
        }

        return (
                <main>
                    <div className="place">
                        <section className="slidebox">
                            <Slideshow key={place.id} pictures={place.pictures}></Slideshow>
                        </section>
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
                                <div className="ratingbox">
                                    <li>{Ratingbox(stars)}</li>
                                </div>
                            </div>
                            </div>
                            <div className="place-infos-collapse">
                                <Collapse key={place.description} title="Description" content={place.description}></Collapse>
                                <Collapse key={place.equipments} title="Equipements" content={content}></Collapse>
                            </div>
                        </div>
                    </div>
                </main>
            )
    }
}

export default Place;

//changer les caracteristiques de l'image pour qu'elle s'etale dans une dimension fixe