import background from "../../assets/banner.png";

function Banner () {
    const css = {backgroundImage: `url(${background})`};
    return (
        <div className="banner" style={css}>
            <h1>Chez vous partout et ailleurs</h1>
        </div>
    )
}

export default Banner;

// <img src={background} alt="bannière"></img>