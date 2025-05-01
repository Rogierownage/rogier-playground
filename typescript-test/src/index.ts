let isEven = (number: number): boolean => number % 2 === 0;

console.log(isEven(15));

let person: {}; // Valid
person = {}; // Valid
person = { name: 'John' }; // Valid
person = {}; // Valid
person = () => '';

if ('name' in person && typeof (person.name) === 'string') {
    console.log(person.name.toUpperCase());
}  