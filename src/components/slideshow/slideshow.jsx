//Génération du caroussel d'images

import leftarrow from "../../assets/left-arrow.svg";
import rightarrow from "../../assets/right-arrow.svg";
import React, { useState } from 'react';

const Slideshow = (props) => {
    const [slide, setSlide] = useState(0);
    const length = props.pictures.length;

    return (
        <div className="slideshow">
            <div className="slides">
                {
                    length>1 &&
                    <div className="arrows">
                    <button onClick={() => setSlide(slide>0 ? slide-1 : length-1)}>
                        <img src={leftarrow} alt="fleche vers la gauche"/>
                    </button>
                    <button onClick={()=> setSlide(slide<length-1 ? slide+1 : 0)}>
                        <img src={rightarrow} alt="fleche vers la droite"/>
                    </button>
                </div>
                }
                <img className="slide-image" src={props.pictures[slide]} alt="interieur de appartement" />
                {
                    length>1 &&
                    <p>{slide+1}/{length}</p>
                }
            </div>
        </div>
    )
}

export default Slideshow;