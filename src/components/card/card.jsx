//Génération des cartes de chaque appartement

function Card (props) {

    const css = {backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.1),rgba(0,0,0,0.7)), url(${props.image})`};

    return (
        <div className="card" style={css}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Card