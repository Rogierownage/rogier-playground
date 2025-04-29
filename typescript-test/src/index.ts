let person: { [key: string]: any }; // Valid
person = {}; // Valid
person = { name: 'John' }; // Valid
person = {}; // Valid
person.name = 'haha'; // Valid
person = () => '';

console.log(person.name);

if ('name' in person && typeof (person.name) === 'string') {
    console.log(person.name.toUpperCase());
}  