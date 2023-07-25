import React, {useState} from "react";
import arrow from "../../assets/arrow.svg";

function Collapse(props) {
    const [state, setState] = useState(false);
    return (
        <main>
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
        </main>
    )
}

export default Collapse;

/*
return (
        <main>
            <div className="collapse">
                <button onClick={() => setState(!state)}>
                    <h1>{props.title}</h1>
                    {state ? <img src={arrow} alt="flèche vers le haut ou le bas" className="arrow"/>
                    : <img src={arrow} alt="flèche vers le haut ou le bas" className="rotated"/>}
                </button>
                {state ? <div className="content">{props.content}</div> : <div className="hidden"></div> }
            </div>     
        </main>
    )
*/