//Génération du composant d'affichage collapse

import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";

function Collapse(props) {
    const [state, setState] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse-title">
                <h1>{props.title}</h1>
                <button onClick={() => setState(!state)}>
                    {state ? <img src={arrow} alt="flèche vers le haut ou le bas" className="arrowup"/>
                    : <img src={arrow} alt="flèche vers le haut ou le bas" className="arrowdown"/>}
                </button>
            </div>
            <div className={state ? "display" : "hidden"}>
                <div className={state ? "content-display" : "content-hidden"}>{props.content}</div>
            </div>
        </div>     
    )
}

export default Collapse;

//style={state ? {height: element.current.scrollHeight+"px"} : {height:"0px"}}

/*
<div className={state ? "content-display" : "content-hidden"}>{props.content}</div>

function Collapse(props) {
    const [state, setState] = useState(false);
    return (
        <div className="collapse">
            <button onClick={() => setState(!state)}>
                <h1>{props.title}</h1>
                {state ? <img src={arrow} alt="flèche vers le haut ou le bas" className="arrow"/>
                : <img src={arrow} alt="flèche vers le haut ou le bas" className="rotated"/>}
            </button>
            <div className={state ? "display" : "hidden"}>
                <div className="content">{props.content}</div>
            </div>
        </div>     
    )
}
        
function Collapse(props) {
    const [state, setState] = useState(false);
    const [height, setHeight] = useState(0);
    const element = useRef();

    useEffect(()=> {setHeight(element.current.scrollHeight)})

    return (
        <div className="collapse">
            <button onClick={() => setState(!state)}>
                <h1>{props.title}</h1>
                {state ? <img src={arrow} alt="flèche vers le haut ou le bas" className="arrow"/>
                : <img src={arrow} alt="flèche vers le haut ou le bas" className="rotated"/>}
            </button>
            <div className={state ? "display" : "hidden"} ref={element} style={state ?{height: element.current.scrollHeight+"px"}:{height:"0px"}}>
                <div className="content">
                    {props.content}
                </div>
            </div>
        </div>     
    )
}
*/