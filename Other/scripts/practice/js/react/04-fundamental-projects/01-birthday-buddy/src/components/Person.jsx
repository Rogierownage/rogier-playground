const Person = ({name, imageUrl, age}) => {
    return <>
        <p>{name} ({age})</p>
        <img src={imageUrl} style={{width:"150px"}}/>
    </>
}

export default Person;