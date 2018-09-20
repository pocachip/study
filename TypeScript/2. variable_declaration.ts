// Typescript Study by Pocachip 2018.09.17
//https://www.typescriptlang.org/docs/handbook/basic-types.html

///////////////////////////
// Variable Declarations //
///////////////////////////

// var declaration;
var a = 10;

// inside of a function
function f() {
    var message = "Hello, world!";
    return message;
}

// we can also access thoes same variables within other functions
function f1() {
    var a = 10;
    return function f2() {
        var b = a + 1;
        return b;
    }
}

var g = f1(); // g() return '11'

// look this example
function f2() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}
f2(); // returns '2'

// Scoping rules
function f3(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f3(true);  // returns '10'
f3(false); // returns 'undefined'

// this coping rules can casue serveral types of mistakes
// becase inner for-loop will accidentally overwrite the variable i
// var => function-scrope variable
function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}

// Error sample
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

10
10
10
10
10
10
10
10
10
10

// let declarations
let hello = "Hello!";

// Block-scoping
// Error example1
function f4(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    //return b; // Error: 'b' doesn't exist here
}

// Error example2
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

//console.log(e); // Error: 'e' doesn't exist here

// Re-declarations and Shadowing

function f5(x) {  
    var x;
    var x;  // it's ok!

    if (true) {
        var x;
    }
}

let myValx = 10;
//let myValx = 20; // error: can't re-declare 'x' in the same scope

// another example
function f7(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f7(false, 0); // returns '0'
f7(true, 0);  // returns '100'

// inner loop's i shadows i from the outer loop
function sumMatrix1(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

// const
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
//kitty = {
//    name: "Danielle",
//    numLives: numLivesForCat
//};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;


// Destructuring
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

// it's ok
first = input[0];
second = input[1];

// swap variables
[first, second] = [second, first];

// parameters to a function
function f8([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f8([1, 2]);

// list usiong the syntax ...
let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

// other elements
let [, second2, , fourth2] = [1, 2, 3, 4];

// Object destructuring
let o = {
    a9: "foo",
    b9: 12,
    c9: "bar"
};
let { a9, b9 } = o;

// Like array destucting, you can have assignment without declaration
({ a9, b9 } = { a9: "baz", b9: 101 });

// Property renaming
let { a9: newName1, b9: newName2 } = o;

// Spread
let first11 = [1, 2];
let second11 = [3, 4];
let bothPlus = [0, ...first11, ...second11, 5];

// doesn't allow spreads of type parameters form generic function
class C {
  p = 12;
  m() {
  }
}
let cfunc = new C();
let clone = { ...cfunc };
clone.p; // ok
//clone.m(); // error!


