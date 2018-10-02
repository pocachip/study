/*   Introduction

RxJS is a library for composing asynchronous and event-based programs by using observable sequences.
It provides one core type "Observable", satellite types (Observer, Schedulers, Subjects) and 
operators inspired by Array#extras(map, filter, reduce, every, etc) to allow handling asynchronous events
as collection. 

RaeactiveX combines the Observer pattern with the Interator pattern and functional programming with collections
to fill the need for an ideal way of managing sequences of events

*/


// The essential concepts in RxJS with solve async event management are:
/*
   - Observalbe : represents the idea of an invokable collection of future values or events
   - Observer : is a collection fo callbacks that knows how to listen to values delivered by the Observable
   - Subscription : represents the execution of an Observale, is primarily useful for cancelling the execution
   - Operators: are pur functions that enable a functional programming style of dealing with collections 
                with operations like map, filter, concat, reduce, etc
   - Subject : is the equivalent to an EventEmitter, and the only way of multicasting a value or event to
               multiple Observers
   - Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation
                 happens on e.g. setTimeout or requestAnimationFrame or other
*/

// 1. First Examples

// Normal javascript
const button = document.querySelector('button');
button.addEventListener('click', () => console.log('Clicked!'));

// Using RxJS  (create an observable instead)
import { fromEvent } from 'rxjs';
const button1 = document.querySelector('button');
fromEvent(button1, 'click')
  .subscribe(() => console.log('Clicked!'));

// 2. Purity ; This means your code is less prone to error
// 1. First Examples
var count = 0;
var button2 = document.querySelector('button');
button2.addEventListener('click', () => console.log(`Clicked ${++count} times`));

// Using RxJS  (create an observable instead)
const { scan } = rxjs.operators;

const button3 = document.querySelector('button');
fromEvent(button3, 'click').pipe(
  scan(count => count + 1, 0)
)
.subscribe(count => console.log(`Clicked ${count} times`));
// The scan operator works just like reduce for arrays. It takes a value which is exposed to a callback
// The returned value of the callback will then become the next value exposed the next time th callback runs

// 3. Flow ; RxJS has a whole range of operators that helps you control how the events flow through
//           your observalbes
// Normal javascript
var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button4 = document.querySelector('button');
button4.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();
  }
});

// Using RxJS  (create an observable instead)
const { throttleTime, scan } = rxjs.operators;

const button6 = document.querySelector('button');
fromEvent(button6, 'click').pipe(
  throttleTime(1000),
  scan(count => count + 1, 0)
)
.subscribe(count => console.log(`Clicked ${count} times`));

// Values  ; You can tranform the values passed through your observables
let count1 = 0;
const rate1 = 1000;
let lastClick1 = Date.now() - rate1;
const button7 = document.querySelector('button');
button7.addEventListener('click', (event) => {
  if (Date.now() - lastClick1 >= rate1) {
    count1 += event.clientX;
    console.log(count1)
    lastClick1 = Date.now();
  }
});

// Using RxJS  (create an observable instead)
const { fromEvent } = rxjs;
const { throttleTime, map, scan } = rxjs.operators;

const button8 = document.querySelector('button');
fromEvent(button8, 'click').pipe(
  throttleTime(1000),
  map(event => event.clientX),
  scan((count, clientX) => count + clientX, 0)
)
.subscribe(count => console.log(count));

