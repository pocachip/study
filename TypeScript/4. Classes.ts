// Typescript Study by Pocachip 2018.09.17
//https://www.typescriptlang.org/docs/handbook/basic-types.html

/////////////////
// Classes     //
/////////////////

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

// Inheritance
class Animal {
    move(distanceInMeters: number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark(){
        console.log('Woof!, Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// More complex example
class Animal1 {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal1 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal1 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal1 = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// Public, private, protected modifiers
// public is default, private only access contining class
// pretected be accessed within deriving classes

// Readonly modifier
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// error! name is readonly. dad.name = "Man with the 3-piece suit"; 

// Accessors
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

// Static Properties
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// Abstract Classes
abstract class Department {
    constructor(public name: string){
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting():void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printName(): void {
        console.log("The Accounting Department meets each Monday at 10 am.");
    }

    printMeeting():void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
// Error cannot create an instance of an abstract class department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// Error no func on declared abstract type  department.generateReports();

// Advanced Techniques

// Constructor functions
class Greeter1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter1: Greeter1;
greeter1 = new Greeter1("world");
console.log(greeter1.greet());

// Using a class as an interface
class PointOrigin {
    x: number;
    y: number;
}

interface Point3d extends PointOrigin {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};