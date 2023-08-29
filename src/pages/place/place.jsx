//Page d'un logement, avec les composants collapse, slideshow, tag et rating

import { useParams, useNavigate } from "react-router-dom";
import data from "../../logements.json";
import Slideshow from "../../components/slideshow/slideshow.jsx";
import "../../components/slideshow/slideshow.scss";
import Collapse from "../../components/collapse/collapse.jsx";
import Tag from "../../components/tag/tag.jsx";
import "../../components/tag/tag.scss";
import Rating from "../../components/rating/rating.jsx";
import "../../components/rating/rating.scss";
import "./place.scss";
import { useEffect } from "react";

function Tagsbox (place) {
    return place.tags.map((tag) => {
        return (
            <Tag key={tag} name={tag}></Tag>
       )
    })
}

function Ratingbox (rating) {
    return rating.map((rank, i) => {
        return (
            <Rating key={`${rank}${i}`} display={rank}></Rating>
        )
    })
}

function Place () {
    let { placeId } = useParams();
    let place = data.find(elem => elem.id===placeId);
    let navigate = useNavigate();
    let equipement = place?.equipments.map(item => <li key={item}>{item}</li>);
    let content = <ul>{equipement}</ul>;
    let stars = [false, false, false, false, false];

    for (let i=0; i<place?.rating; i++)
    {
        stars[i]=true;
    }

    useEffect(()=> {
        if(place===undefined)
    {
        navigate("/error");

    }
    },[place, navigate])
    
    return (
        place &&
            <main>
                <div className="slidebox">
                    <Slideshow key={place.id} pictures={place.pictures}></Slideshow>
                </div>
                <div className="place-infos">
                    <div className="place-infos-top">
                        <div className="place-infos-left">
                            <h1>{place.title}</h1>
                            <h2>{place.location}</h2>
                            <div className="tagsbox">
                                <li>{Tagsbox(place)}</li>
                            </div>
                        </div>
                        <div className="place-infos-right">
                            <figure className="host">
                                <figcaption>{place.host.name}</figcaption>
                                <img src={place.host.picture} alt="propriétaire du logement" />
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
            </main>
        )
}

export default Place;