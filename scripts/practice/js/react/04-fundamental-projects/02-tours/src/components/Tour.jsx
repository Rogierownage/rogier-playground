const Tour = (props) => {
    console.log(props);

    return <>
        <img src={props.image} style={{width: '200px'}}></img>
        <h2>{props.name} (€ { props.price})</h2>
        <p>{props.info}</p>
    </>
}

export default Tour;