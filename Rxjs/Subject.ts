/*
  Subject
  What is a Subject? An RxJS Subject is a specail type of Observable that allows values to be 
  multicasted to many Observers. While plain Observables are unicast(each subscribed Observer owns
  an independent execution of the Observable), Subjects are multicast
*/

import { Subject, from } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(1);
subject.next(2);

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2

// Since a Subject is an Observer, this also means 
//you may provide a Subject as the argument to subscribe of any Observable
const subject1 = new Subject<number>();

subject1.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject1.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

const observable = from([1, 2, 3]);

observable.subscribe(subject1); // You can subscribe providing a Subject

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3