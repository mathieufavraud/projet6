//Génération de la bannière

const Banner = (props) => {
    const css = {backgroundImage: `url(${props.image})`};
    return (
        <div className="banner" style={css}>
            <span><h1>{props.text}</h1></span>
        </div>
    )
}

export default Banner;