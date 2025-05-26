import Person from "./Person";

const List = ({people}) => {
    console.log(people);
    return people.map((person) => <Person key={person.id} name={person.name} age={person.age} imageUrl={person.image}></Person>);
}

export default List;