// Typescript Study by Pocachip 2018.09.17
//https://www.typescriptlang.org/docs/handbook/basic-types.html

/////////////////
// Interfaces  //
/////////////////

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object"};
printLabel(myObj);

//=>
interface LabelledValue{
    label:string;
}

function printLabel1(labelledObj:LabelledValue) {
    console.log(labelledObj.label);
}

let myObj1 = {size: 10, label:"Size 10 Object"};
printLabel1(myObj);

// Optional Properties
interface SquareConfig {
    color?: string;
    width?: number;
}

// Readonly properties
interface Point {
    readonly x:number;
    readonly y:number;
}

let p1: Point = { x:10, y:20};
//Error!  p1.x = 5;

// ReadonlyArray[T]
let a1: number[] = [1,2,3,4];
let r1: ReadonlyArray<number> = a1;

//Error! r1[0] = 12;
//Error! r1.push(5);
//Error! r1.length = 100;
//Error! a1 = r1;

// snippet ReadonlyArray > normal array
a1 = r1 as number[];

// readonly vs const
// 변수에는 const를 쓰고 프로퍼티에는 readonly


// 추가 속성을 특별한 방법으로 정의함
interface SquareConfig1 {
    color?: string;
    width?: number;
    [propName:string]: any;
}

// Function Types
interface SearchFunc {
    (source:string, subString:string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source:string, subString:string):boolean{
    let result = source.search(subString);
    return result > -1;
}

// Indexable Type
interface StringArray {
    [index:number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr:string = myArray[0];
// supported index signature => string and number

// Class Types
interface ClockInterface {
    currentTime: Date;
    setTime(d:Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d:Date) {
        this.currentTime = d;
    }
    constructure(h:number, m:number){}
}

// Difference between the static and instance sides of classes
interface ClockConstructor{
    new (hour:number, minute:number);
}

// Extending Interfaces
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;


interface PenStroke {
    penWidth: number;
}

interface nSquare extends Shape, PenStroke {
    sideLength: number;
}

let square1 = <nSquare>{};
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;

//hybrid type
//this object acts as both a function and an object, with additional properties
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let cc = getCounter();
cc(10);
cc.reset();
cc.interval = 5.0;