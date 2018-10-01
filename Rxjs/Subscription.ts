/*
Subscription
What is a Subscription? A Subscription is an object that represents a disposable resource,
usually the execution of an Observable. A Subscription has one important method, unsubscribe,
that takes no argument and just disposes the resource held by the subscription. In previous
version of RxJS, Subscription was called "Disposable"
*/

import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();

//anther sample
const observable1 = interval(400);
const observable2 = interval(300);

const subscription1 = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

subscription1.add(childSubscription);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription1.unsubscribe();
}, 1000);

/* output
second: 0
first: 0
second: 1
first: 1
second: 2
*/