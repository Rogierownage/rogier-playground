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


// Best-practice: Functions should always have parameter and return types defined explicitly.
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


// Types can be inferred by the TS engine. This example gets inferred as { name: string }. There is usually no need to explicitly declare types. For functions however, it is considered best-practice to do so anyways.
let personalData = { name: 'うずまきナルト' };


// You can define a type for later use, by using the type keyword.
type PersonType = { id: number, name: string }

let employee: PersonType;
let customer: PersonType;


// Properties can be typed as optional by using a question mark. Keep in mind not to overuse this though, or you lose the point of typescript.
let shop: { name: string, coordinates?: [number, number] } = { name: 'Gamestop' };

// Valid.
shop.coordinates = [100, 500];
shop.coordinates = undefined;
shop = { name: 'Albert Heijn' };
shop = { name: 'Target', coordinates: [300.50, 0] };

// Invalid.
shop.coordinates = null;
shop.coordinates = [300];
shop = {};
shop = { name: 'Nintendo', coordinates: {} };
shop = { name: 'Olive Garden', petsAllowed: false };


// Properties can be defined as readonly, so that they can't be modified.
let information: { readonly hasPets: boolean } = { hasPets: true };

// Invalid.
information.hasPets = false;
information.hasPets = true;
information.isLarge = true;

// You can actually reassign the entire object, but it will keep its type definition. The following is valid.
information = { hasPets: false };

// Invalid.
information.hasPets = true;
information = { name: 'John Oliver' };


// If you want to annotate the return type of a function, while defining the parameters normally, you can use a colon like this. This is nice and concise.
let splitBySpaces = (string: string): string[] => string.split(' ');
// If you want to annotate the entire function, you can use a colon and arrow, like this.
let logger: (message: string) => void;

let banaan = { name: 'Yes', age: 5 };

type Dog = { bark: () => void };
type Cat = { meow: () => void };


// Union type. Can be either one.
let animal: Dog | Cat | string;

// Valid.
animal = { bark: () => console.log('Woof') };
animal = { meow: () => console.log('Meow') };
animal = { bark: () => console.log('Woof'), meow: () => console.log('Meow') };
animal = 'Bob';

// Invalid.
animal = {};
animal = { bark: () => console.log('Woof'), meow: () => console.log('Meow'), greet: () => console.log('Hello') };
animal = { name: 'Peppy' };
animal = 5;


// Intersection type. Must be both.
let pet: Dog & Cat;

// Valid.
pet = { bark: () => console.log('Woof'), meow: () => console.log('Meow') }

// Invalid.
pet = { bark: () => console.log('Woof') };
pet = { meow: () => console.log('Meow') };
pet = {};
pet = { bark: () => console.log('Woof'), meow: () => console.log('Meow'), greet: () => console.log('Hello') };
pet = { name: 'Peppy' };
pet = 5;


// Union type alias definition.
type TennisScore = 0 | 15 | 30 | 40 | 'advantage' | 'deuce';
let myScore: TennisScore;

// Valid
myScore = 0;
myScore = 15;
myScore = 'advantage';
myScore = 40;

// Invalid.
myScore = 'Advantage';
myScore = 'tie';
myScore = 16;
myScore = null;
myScore = undefined;
myScore = {};
myScore = [];
myScore = () => '';


let getCustomer = (id?: number): string | null => 'John';

getCustomer();
// string | null
let myCustomer = getCustomer(1);

// Invalid.
getCustomer(null);

function getPeople(): string[] | null {
    if (1) {
        return null;
    }

    return ['Donald'];
}

let people = getPeople();

// Invalid.
people[0];

// Valid. Optional property accessor.
people?.[0].toUpperCase()


let getDestroyer = (): Function | null => {
    if (1) {
        return () => '';
    }

    return null;
}

let destroy = getDestroyer();

// Invalid
destroy();

// Valid. Optional function call operator.
destroy?.();


let fetchUser = (params: { email: string }): {} => {
    return params;
}

// Invalid, too many properties
fetchUser({ email: 'test@paqt.com', token: 'uf484f39i439fif43' });

let params = { email: 'test@paqt.com', token: 'uf484f39i439fif43' };
// Valid for some reason. Typescript bug?
fetchUser(params);


let myArray: number[];
let myTuple: [number] = [1];
// Can assign tuple to matching array.
myArray = myTuple;


(val: string | number) => {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }

    // The TS engine understands that it must be a number if it reaches this point.
    val.toFixed(2);
}

(val: string | number) => {
    if (typeof val === 'string') {
        val = val.toUpperCase();
    } else {
        // The TS engine understands that it must be a number here.
        val = val.toFixed(2);
    }

    return val;
}

(val: string | number | any[]) => {
    if (typeof val === 'string') {
        return val.toUpperCase();
    }

    // Invalid. Even though it can't be a string anymore, it's still not sure that it is actually a number. It could still be an array.
    val.toFixed(2);

    // JS is weird, so we check for object here, which confirms whether it's an array or not.
    if (typeof val !== 'object') {
        // Now this is valid. We checked that it's not an array, so it must be a number.
        val.toFixed();
    }

}

// Either all strings or all numbers.
let myList: string[] | number[];
myList = [1, 2, 3];
myList = ['', 'hello'];
// Invalid
myList = [1, 2, "3"];

// These two syntaxes are identical. An array that can contain a combination of strings and numbers.
let myList2: Array<string | number>
let myList3: (string | number)[];
myList2 = [1, 2, "3"];
myList3 = [1, 2, "3"];


// Using "as const" defines the values as literals, not just as types.
const cat = { id: 30, name: 'Floofy' } as const;
const myCoordinates = [30, 1000] as const;
// Invalid. The array is actually immutable now, including functions.
myCoordinates.push(30);


type MyCat = { type: 'cat', meow: Function };
type MyDog = { type: 'dog', bark: Function };
type MyAnimal = MyCat | MyDog;

// Discriminated union. The type literal determines which object definition is matched.
let getAnimal = (id: number): MyAnimal => {
    if (id === 1) {
        return { type: 'cat', meow: () => console.log('Mreew') }
    };

    return { type: 'dog', bark: () => console.log('Wroof') };
}

const myPet = getAnimal(1);

// The only known property here is type. I can't use meow or bark. Keep in mind that the type property will be available either way.
myPet.type;
// Invalid
myPet.meow();
myPet.bark();

if (myPet.type === 'cat') {
    // Now i can use meow, but not bark.
    myPet.type;
    myPet.meow();
    // Invalid
    myPet.bark();
} else {
    // Now i can use bark, but not meow.
    myPet.type;
    myPet.bark();
    // Invalid
    myPet.meow();
}

// Invalid. Discriminated type is enforced when initializing.
let doggy: MyAnimal = { type: 'dog', meow: () => '' };


// "Best of both worlds" approach when defining constants. Define as const with a type, while keeping the literal value type inferred by the TS engine.
const myDoggy = { name: 'Fishy' } as const satisfies { name: string };
// This avoids changing the value. This is now invalid.
myDoggy.name = 'Hello';
// This avoids assigning the wrong values. This is now invalid.
const myDoggy2 = { name: 15 } as const satisfies { name: string };


// Template literal type. Must conform to the defined "blueprint". This is valid.
let rating: `I rate ${number}/${number}` = 'I rate 8/8';
rating = 'I rate 100/200';

// Invalid
rating = 'I rate very high';
rating = 'I Rate 5/6';
rating = 'I rate five/five';

type Game = 'Splatoon 3' | 'Elden Ring' | 'Clair Obscur: Expedition 33' | 'Noita';
type Rating = `I give ${Game} the rating ${number}/${number}.`;

// Invalid.
let tooMuchWater: Rating = 'I give Pokemon Emerald the rating 7.8/10.';
tooMuchWater = 'I give Smash Bros the rating 100/100.';
// Valid
tooMuchWater = 'I give Noita the rating 98/100.'
tooMuchWater = 'I give Clair Obscur: Expedition 33 the rating 93.5/99.';


const USER_ROLES = ['guest', 'moderator', 'administrator'] as const;
type UserRole = (typeof USER_ROLES)[number];


// Defining a generic type using carets before the function parenthesis, which basically "remembers" the type of the parameter so that it can be used for the return value.
// This function is defined as returning the same type as its argument, which can be any type.
function identity<Banana>(arg: Banana): Banana {
    return arg;
}

// Valid
identity('John').toUpperCase();
identity(100.15).toFixed(2);
identity<string>('Hello');
// Invalid
identity<boolean>(100);

function getAny(): any {
    return 500;
}

let anyValue = getAny();
// Explicitly state that the parameter will be a number, even though any is passed. Typescript now knows that a number will also be returned.
let returnVal = identity<number>(anyValue);
// Valid
returnVal.toFixed(3);


let genericFunc = <FirstType, SecondType>(arg1: FirstType, arg2: SecondType): FirstType | SecondType => {
    if (Math.random() >= 0.5) {
        return arg1;
    }

    return arg2;
}

// Now someVar will be type: string | number
let someVar = genericFunc('Hello', 100);

// These are valid.
if (typeof someVar === 'string') {
    someVar.toUpperCase();
} else {
    someVar.toFixed(2);
}

function arrayIdentity<Type>(list: Type[]): Type[] {
    console.log(list.length);

    return list;
}

// Type will be (string | number)[]
let coolListBro = arrayIdentity([100, 'hello']);


import User from '../src/user.js';

let me = new User(1, 'test@example.com', 'Test user');
me.log(); // Object { email: "test@example.com", name: "Test user", id: 1 }

console.log(me); // Object { id: 1, email: "test@example.com", name: "Test user", key: "user" }

// Invalid. Readonly property.
me.id = 3;
// Invalid. Private property.
me.key;


// Function where both parameters must be the same type.
let coolFunc = <Type>(var1: Type, var2: Type): void => console.log({ var1, var2 });

// Valid.
coolFunc(1, 3);
coolFunc(true, false);
coolFunc<string>('Hello', 'Good day');
// Invalid.
coolFunc(1, 'hey');
coolFunc<boolean>(1, 2);


// Key must exist in object.
let getProp = <TObj extends object, TKey extends keyof TObj>(obj: TObj, key: TKey): any => {
    return obj[key];
}

// Valid
getProp({ value: 10 }, 'value');
// Invalid
getProp({ value: 10 }, 'name');

getProp([1], 3);

[1][3]

type NormalUser = { email: string };
type ImportantUser = { email: string, isAdmin: boolean };

(user: NormalUser | ImportantUser) => {
    // Invalid
    user.isAdmin;

    // Valid. Inline narrowing and then using the property right away.
    return 'isAdmin' in user && user.isAdmin;
}

type Fish = { swim: () => void };
type Bear = { roar: () => void };

let getFishOrBear = (): Fish | Bear => {
    return { swim: () => null };
};

// Returns whether type is Fish.
let isFish = (animal: Fish | Bear): animal is Fish => {
    return 'swim' in animal;
}

let fishOrBear = getFishOrBear();

if (isFish(fishOrBear)) {
    // In this case it must be a fish, so this is valid.
    fishOrBear.swim();
} else {
    // In this case it must be a bear, so this is invalid.
    fishOrBear.swim();
}

// This type doesn't look very nice when you hover over it.
type UglyType = {
    a: 'hello',
    b: 'hi'
} & {
    b: {},
    c: []
} & {
    person: object,
    animal: string
}

// This utility makes it look nicer when applied.
type Prettify<T> = {
    [K in keyof T]: T[K]
} & {};

// Now the hover looks nice.
type PrettyType = Prettify<UglyType>

// This is probably weird and hacky, but i am "flipping" the type here (Swapping the keys and values). This doesn't work or make sense with most types, though.
type Flip<T> = {
    [K in keyof T as Extract<T[K], PropertyKey>]: K
}
// Only the string types are actually preserved now, and with certain types (Like number or string) some weird crap happens.
type Transformed = Flip<PrettyType>;

// Transforms the type so that each type gets mapped into a getter function that returns the type.
type Getters = {
    [K in keyof PrettyType as `get${Capitalize<K>}`]: () => PrettyType[K]
}

// Simply put, keyof creates a union type of all the keys.
type Keys = keyof PrettyType

// The following 2 approaches give the same result.
type Values = PrettyType[keyof PrettyType]
type Values2 = PrettyType['a' | 'b' | 'c' | 'person' | 'animal']

const routes = {
    home: '/',
    admin: 'admin/login',
    user: 'user',
} as const;

// This function must get one of the keys of routes as the parameter.
let getRoute = <TRoute extends keyof typeof routes>(route: TRoute): string => routes[route]

// You must pass 'home', 'admin', or 'user'. Autocompletion is supported.
getRoute('admin');

// typeof gets you the type definition of the value.
type routesTypes = typeof routes;
// keyof then gets you the keys as a union type.
type routesTypesKeys = keyof routesTypes;
// The above actually works without "as const".

// However the following would not work without it. It would simply become "string", rather than a union of the original values.
type routesValues = (typeof routes)[keyof typeof routes];

type GenericRequest<TData> = {
    code: number,
    error?: string,
    data: TData,
}

// Valid.
let myRequest: [GenericRequest<number>, GenericRequest<{ field: string, message: string }>] = [
    { code: 201, data: 20.5 },
    {
        code: 422,
        error: 'Data invalid',
        data: { field: 'name', message: 'Name is required' }
    },
];

function getData(url: string): any {
    // Imagine that the return type is not consistent here.
    return {};
}

function fetch<TReturn>(url: string): TReturn {
    return getData(url);
};

// Now we can specify the return type directly, and TS will understand it.
let result = fetch<{ name: string }>('www.google.nl');


type GetReturnType<T extends (...args: any) => any> = ReturnType<T>;
type MyReturn = GetReturnType<() => 'hello'>;


// Must be an object with string keys and number values.
let myRecord: Record<string, number>;

// Valid
myRecord = {
    a: 15,
    b: 20,
    greeting: 500,

    // This is allowed for some reason.
    300: 500,

    // Not allowed:
    d: [100],
};
myRecord.c = 30;

// Invalid.
myRecord[5] = [];
myRecord = [];
myRecord = 5;
myRecord = 'hey';


function getObjectKeys<TObj extends {}>(object: TObj) {
    // Assert the type so that TS understands that the keys match this type, rather than just inferring an array of strings.
    return Object.keys(object) as Array<keyof TObj>;
}

let myKeys = getObjectKeys({ name: 'Test', age: 500 });


// Default type: number
function createSet<T = number>() {
    return new Set<T>;
}

// Type: Set<string>
let myCreatedSet = createSet<string>();
// Type: Set<number>
let myCreatedSet2 = createSet();
