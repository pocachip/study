// RxJS

// Introduction
/* RxJS is a library for composing asynchronous and event-based programs by using observable sequences
It provides one core type, the Observable, satellite types(Observer, Schedulers, Subjects) and operators
inspired by Array#extras(map, filter, reduce, ever, etc) to allow handling asynchronous events as colletions
*/
/*
$yarn init -yarn
$yarn add rxjs webpack webpack-dev-server typescript ts-loader
$yarn add webpack-cli --dev
*/

// Anatomy of an Observable

/*
  1. Create Observables
  2. Subscribing to Observalbes
  3. Executing the Observable
  4. Disposing Observables
  */
 
// 1.Create Observables
  import { Observable, from } from 'rxjs';
  const observable = Observable.create(function subscribe(observer) {
      const id = setInterval(() => {
          observer.next('hi')
      }, 1000);
  });

// 2. Subscribing to Observables
  observable.subscribe(x => console.log(x));

// 3. Executing Observables
// There are three type of values an Observable Execution can deliver
/*
   1. "Next" notification
   2. "Error" notification
   3. "Complete" notification
*/
const observable1 = Observable.create(function subscribe(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
  observer.next(4); // It not delivered because it would violate the contract
});

// use try catch
const observable2 = Observable.create(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  } catch (err) {
    observer.error(err); // delivers an error if it caught one
  }
});

// 4. Disposing Observable Executions
const observable3 = from([10, 20, 30]);
const subscription = observable3.subscribe(x => console.log(x));
// Later:
subscription.unsubscribe();

// another example
function subscribe(observer) {
  var intervalID = setInterval(() => {
    observer.next('hi');
  }, 1000);

  return function unsubscribe() {
    clearInterval(intervalID);
  };
}

var unsubscribe = subscribe({next: (x) => console.log(x)});

// Later:
unsubscribe(); // dispose the resources