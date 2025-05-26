import { people as data } from '../../../data'

const People = () => {

    return <>
        <h2>People</h2>
        {data.map((person) => {
            const image = person.images?.[0]?.small?.url;

            return <div key={person.id}>
                <h2>{person.name}</h2>
                {person.nickName && <p>"{person.nickName}"</p>}
                {image && <img src={image} style={{ width: '50px' }} />}
            </div>
        })}
    </>;
}

export default People; 