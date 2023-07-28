function Card (props) {

    const css = {backgroundImage: `url(${props.image})`};
    //erreur de syntaxe a corriger

    return (
        <div className="card" style={css}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Card

//const css = {backgroundImage: `linear-gradient(180deg, white,lightgrey), url(${props.image})`};

//gradient sur les cartes a revoir