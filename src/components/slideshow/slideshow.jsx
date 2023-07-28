import leftarrow from "../../assets/left-arrow.svg";
import rightarrow from "../../assets/right-arrow.svg";
import React, { useState } from 'react';

function Slideshow (props) {
    const [slide, setSlide] = useState(0);
    const length = props.pictures.length;

    return (
        <div className="slideshow">
            <button><img src={leftarrow} alt="fleche vers la gauche" onClick={() => setSlide(slide>0 ? slide-1 : length-1)}/></button>
            <img src={props.pictures[slide]} alt="photo de l'appartement" />
            <button><img src={rightarrow} alt="fleche vers la droite" onClick={()=> setSlide(slide<length-1 ? slide+1 : 0)}/></button>
            <p>slide numero {slide+1}/{length}</p>
        </div>
    )
}

export default Slideshow;