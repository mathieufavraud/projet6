function Card (props) {
    const css = {backgroundImage: `url(${props.image})`};
    return (
        <div className="card" style={css}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Card