//Génération de la bannière

function Banner (props) {
    const css = {backgroundImage: `url(${props.image})`};
    return (
        <div className="banner" style={css}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default Banner;