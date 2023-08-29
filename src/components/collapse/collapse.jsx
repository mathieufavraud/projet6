//Génération du composant d'affichage collapse

import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";

function Collapse(props) {
    const [state, setState] = useState(false);

    return (
        <div className={`collapse ${props.classname}`}>
            <div className="collapse-title">
                <h1>{props.title}</h1>
                <button onClick={() => setState(!state)}>
                    {state ? <img src={arrow} alt="flèche vers le haut ou le bas" className="arrowup"/>
                    : <img src={arrow} alt="flèche vers le haut ou le bas" className="arrowdown"/>}
                </button>
            </div>
            <div className={state ? "display" : "hidden"}>
                <div className={state ? "content-display" : "content-hidden"}><p>{props.content}</p></div>
            </div>
        </div>     
    )
}

export default Collapse;