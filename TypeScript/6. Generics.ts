// Typescript Study by Pocachip 2018.09.17
//https://www.typescriptlang.org/docs/handbook/basic-types.html

//////////////
// Generics //
//////////////

/*  
    A major part of software engineering is building components that not only have well-defined
    and consistent APIs, but are also reusable. Components that are capable of working on the data 
    of today as well as data of tomorrow will give you the most flexible capabilities for building up
    large software systems
*/

// Hello World of Generics

function identity(arg:number): number {
    return arg;
}

// or

function identity2(arg: any): any {
    return arg;
}
// this case If we passed in a number, the only information we have is that any type could be returned

// Capturing the type of argument...in such a way be returned
function identity3<T>(arg:T) : T {
    return arg;
}

// Working with Generic Type Variables
// if we want to log upper function

function loggingIdentity3<T>(arg: T): T {
// error becase if T is number, it has not length function    console.log(arg.length);
    return arg;
}

// this function T  -> T[]
function loggingIdentity4<T>(arg:T[]): T[] {
    console.log(arg.length);
    return arg;
}
// or
function loggingIdentity5<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

// Generic Types for return type
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identityA<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

// Generic Classes

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y) { return x+y; };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x+y; };

console.log(stringNumeric.add(stringNumeric.zeroValue,"test"));

// Generic Constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity6<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// Error loggingIdentity6(3);
loggingIdentity6({length:10, value: 3});

// Using Type Parameters in Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
//error getProperty(x, "m"); // Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// Using Type Parameters in Generic Constraints
function getProperty7<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x7 = { a: 1, b: 2, c: 3, d: 4 };

getProperty7(x7, "a"); // okay
// error getProperty7(x7, "m"); // Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// Using Class Types in Generics
// When creating factories in TypesScript using generics, it is necessary to refer to class types by their
// constructor functions
function create<T>(c: {new(): T;}):T {
    return new c();
}

// more advanced example
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class AnimalX {
    numLegs: number;
}

class Bee extends AnimalX {
    keeper: BeeKeeper;
}

class Lion extends AnimalX {
    keeper: ZooKeeper;
}

function createInstance<A extends AnimalX>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!

