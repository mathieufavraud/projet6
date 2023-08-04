//Génération du caroussel d'images

import leftarrow from "../../assets/left-arrow.svg";
import rightarrow from "../../assets/right-arrow.svg";
import React, { useState } from 'react';

function Slideshow (props) {
    const [slide, setSlide] = useState(0);
    const length = props.pictures.length;

    return (
        <div className="slideshow">
            <div className="slides">
                <button className="left"><img className="slide-arrow" src={leftarrow} alt="fleche vers la gauche" onClick={() => setSlide(slide>0 ? slide-1 : length-1)}/></button>
                <img className="slide-image" src={props.pictures[slide]} alt="interieur de appartement" />
                <button className="right"><img className="slide-arrow" src={rightarrow} alt="fleche vers la droite" onClick={()=> setSlide(slide<length-1 ? slide+1 : 0)}/></button>
            </div>
            <p>{slide+1}/{length}</p>
        </div>
    )
}

export default Slideshow;

//emplacement des numeros des slides