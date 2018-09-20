// Typescript Study by Pocachip 2018.09.17
//https://www.typescriptlang.org/docs/handbook/basic-types.html

/////////////////
// Functions   //
/////////////////

// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x+y; };

// Javascript function can refer to variables outside of the function body "capture"
let z = 100;

function addToZ(x, y){
    return x + y + z;
}

// Function Types
function addFunc(x:number, y:number):number {
    return x + y;
}

let myAddFunc = function(x:number, y:number): number { return x + y; };

// Writing the function type
let myAddFunc2: (x:number, y:number) => number =
    function(x:number, y:number):number {return x+y;};

// Inferring the types
//? let AddFunc5 = function(x:number, y:number):number { return x + y; };
//? let AddFunc5:(baseValue:number, increment:number) => number =
//?     function(x, y) { return x + y; };

// Optional and Defualt Parameters
function buildName(firstName: string, lastName:string) {
    return firstName + " " + lastName;
}

//Error too few parameter   let result1 = buildName("Bob");

function buildName2(firstName: string, lastName?: string){
    if(lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName2("Bob");

// default-initialized parameter
function buildNameInit(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

// Rest Parameters
function buildRestName(firstName:string, ...restofName: string[]){
    return firstName + " " + restofName.join(" ");
}

let employeeName = buildRestName("Joseph", "Samuel", "Lucas", "MacKinzie");

function anotherName(firstName:string, ...restOfName: string[]){
    return firstName + " " + restOfName.join(" ");
}
let buildNameFunc: (fname: string, ...rest:string[]) => string = buildName;

// this and arraw function
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// this parameters
function f(this: void) {
}

// usage
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck1: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker1 = deck1.createCardPicker();
let pickedCard1 = cardPicker();

alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// this parameters in callbacks

interface UIElement {
    addClickListener(onclick: (this:void, e:Event) => void ): void;
}

class Handler {
    infor: string;
    onClickBad(this: Handler, e:Event){
        //oops, used this here. using this callback would crash at runtime
//Error        this.info = e.message;
    }
}
let h = new Handler();
//Error uiElement.addClickListener(h.onClickBad);
