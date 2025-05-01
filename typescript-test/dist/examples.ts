// Object with keys. Very specific.
let person: { id: number, name: string };

// Valid.
person = { id: 5, name: 'john' };

// Invalid.
person = '';
person = 5;
person = {};
person = { id: 2 };
person = { scope: 'large' };
person = [];
person = () => '';
person = null;
person = undefined;


// Object without keys. Not very specific at all. Can have any value except undefined or null.
let account: {};

// Valid.
account = 'Bank';
account = '';
account = 5;
account = 0;
account = {};
account = { currency: 'EUR', amount: 500 };
account = [];
account = () => '';

// Invalid.
account = null;
account = undefined;


// "object" type. Can contain anything "object-like", which basically means any non-primitive value.
let mailer: object;

// Valid.
mailer = {};
mailer = { student: 'Kenny', grade: 8 };
mailer = [1, 2, 3];
mailer = [];
mailer = () => console.log('Hello');

// Invalid.
mailer = null;
mailer = undefined;
mailer = '';
mailer = 5;


// A type followed by brackets means an array with any number of those elements. In this example, the type is "any".
let students: any[];

// Valid.
students = [1, 2, 3];
students = ['John', 'Bartholomew'];
students = [];

// Invalid.
students = 10;
students = 'England';
students = { name: 'Isaac' };
students = {};
students = null;
students = undefined;


// Alternate syntax for arrays.
let numbers: Array<number>

// Valid.
numbers = [1, 2, 3];
numbers = [];
numbers = [55, Infinity];

// Invalid.
numbers = [true, false];
numbers = [1, "2"];


// Multiple types can be specified.
let list: (string | number | null)[];

// Valid.
list = [1, 2, 3, "4"];
list = [null, 100];

// Invalid.
list = [1, 'Hello', undefined];


// Alternate syntax for array with multiple types.
let balances: Array<number | string>;

// Valid.
balances = [100_000, -5, 'Unknown'];
balances = [20];
balances = ['Nothing'];


// This array-like type annotation defines a tuple. This is a very specific array, with a set number of items and a defined type for each item.
let items: [number, string, Function, number];

// Valid.
items = [15, 'Name', () => 100, 25];

// Invalid.
items = [1, 'Hi', 25, 100];
items = [30];
items = ['10', 'Farmer', () => '', 100];
items = [0, 'Twenty', function (gravity: number): number { return gravity * 2 }, 200, 2]; // Too many items
items = [];
items = {};
items = () => '';
items = '';
items = 100;
items = null;
items = undefined;


// Best practice: Functions should always have parameter and return types defined explicitly.
function calculateTaxes(income: number): number {
    return income * 0.19;
}
let isEven = (number: number): boolean => number % 2 === 0;
// "never" return type because this function will not actually fully resolve, even implicitly. Its execution is interrupted by the throw statement.
let handler = (message: string): never => { throw new Error(message) };


// Unknown type. Can not be used for anything that requires anything specific, unless checked manually.
let someData: unknown;
// Assignment of a value does not change its defined type.
someData = 'Hello';

// Valid because this function can handle anything. ("any" type can even be null or undefined);
console.log(someData);

// Invalid because the type may not actually match what is expected/required.
someData.toFixed(2);
someData.toUpperCase();
Math.floor(someData);
isEven(someData);

// Custom function that accepts any parameter except null or undefined.
let myPrinter = (data: {}): void => console.log(data);
// Invalid because unknown type may contain null or undefined.
myPrinter(someData);

// Checking the type infers the "unknown" type to be "number", inside this code block.
if (typeof someData === 'number') {
    // Valid because the type was manually checked first.
    someData.toFixed(2);
    Math.floor(someData);
    isEven(someData);

    // Invalid because string type was not checked.
    someData.toUpperCase();
}

// Invalid because we are outside of the block where the type was checked.
Math.floor(someData);


// The {} type is not known to have any properties, and any properties it has are of unknown type. Manual type checking is required to do anything with the properties.
let hero: {} = { name: 'Frieren', age: Infinity };

// Invalid because the type definition has no name property.
console.log(hero.name);

if ('name' in hero) {
    // Invalid. The name property was checked to exist, but the type is still unknown.
    console.log(hero.name.toUpperCase());
}

if ('name' in hero && typeof (hero.name) === 'string') {
    // Valid. The existance and type of the property were checked and it can be treated as a string.
    console.log(hero.name.toUpperCase());
}


let response: unknown;

if (typeof response === 'number' && typeof response === 'string') {
    // Lol what? This conditional makes no sense, but apparently it makes the type "never". I guess that makes some sense.
    response;
}


// Invalid because the function returns implicitly. It is not allowed to return at all.
function nothing(): never { };
