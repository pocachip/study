// Typescript Study by Pocachip 2018.09.17
//https://www.typescriptlang.org/docs/handbook/basic-types.html

/////////////////
// Basic Types //
/////////////////

// Boolean
let isDone:boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
// use (") or (')
let color: string = "blue";
color = 'red';
// template strings, multiple line(`) and have embedded expression ${ expr }
let fullName: string = "Park Seoung Jae";
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

      I'll be ${ age + 1 } years old next month.`;
// same expression
let sentense2: string = "Hello, my name is " + fullName + ".\n\n" +
"     I'll be " + (age +1) + "years old next month.";

// Array 2가지 방식 표현
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple  고정된 갯수의 type Array를 표현
let xx: [string, number];
// Initailize it
xx = ["hello", 10]; // OK
//x = [10, "hello"]; //Error

// accessing
console.log(x[0].substr(1)); //OK
//console.log(x[1].substr(1)); //Error, 'number' does not have 'substr'
x[3] = "world"; //OK, 'string' can be assigned to 'string | number'
console.log(x[5].toString()); //OK, 'string' and 'number' both have 'toString'
//x[6] = true; // Error, 'boolean' isn't 'string|number'

// Enum
enum Color { Red, Green, Blue }
let c:Color = Color.Green;

// by default enums begin numbering their members starting at 0
enum Color1 { Red = 1, Green = 2, Blue = 4 }
let c2:Color1 = Color1.Green;

enum Color2 { Red = 1, Green, Blue }
let colorName: string = Color2[2];
console.log(colorName); //Displays 'Green' as its value is 2 above

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; //okey, definitely a boolean

let notSure1: any = 4;
notSure1.ifItExistes(); // okey, ifItExists might exist at runtime
notSure1.toFiexed(); //okey, toFixed exists (but the comiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'

let listSome: any[] = [1, true, "free"];
listSome[1] = 100;

// Void
// void is a little like the oppsite of any; the absence of having any type at all
// You may commonly see this as return type of functions that do not return a value
function warnUser(): void {
    console.log("This is my waring message");
}
// Declaring variables of type void is not useful because you can only assign undefined or null to them;
let unusable: void = undefined;
// --strictNullChecks flag check

// Never
// never type represents the type of values that never occur
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

// Object
// object is a type that represents the non-primitive type
declare function create1(o: object | null): void;
create1({ prop: 0 }); // OK
create1(null); // OK

//create(42); // Error
//create("string"); // Error
//create(false); // Error
//create(undefined); // Error

// Type assertions
// Type assertions have two forms: "angle-bracket" syntax, as-syntax
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
// when using TypeScript with JSX, only as-style assertions are allowed

// A note about let
// let keyword 를 var보다 가급적 사용할 것



