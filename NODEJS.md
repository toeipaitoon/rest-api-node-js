# Node.js Example
This is an example code for understand Node.js

## Callback function 
1. callback-basic.js
```js
function calculate(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2);
}

function calcProduct(num1, num2) {
    return num1 * num2;
}

function calcSum(num1, num2) {
    return num1 + num2;
}
// alerts 150, the product of 5 and 15
console.log(calculate(10, 15, calcProduct));
// alerts 20, the sum of 5 and 15
console.log(calculate(5, 15, calcSum));
```
2. callback-hell.js
```js
var stepValue = 5;

function addStepFunction(value, callback) {
    return callback(value+stepValue, false);
}

function subStepFunction(value, callback) {
    return callback(value-stepValue, false);
}

function mulStepFunction(value, callback) {
    return callback(value* stepValue, false);
}

addStepFunction(5, function(addRes, err) {
    if(!err) {
        subStepFunction(addRes, function(subRes, err) {
            if(!err) {
                mulStepFunction(subRes, function(mulRes, err){
                    if(!err) {
                        console.log("Result => ", mulRes);
                    }
                })
            }
        })
    }
})
```

## Promise, Async Await

1. promise-from-callback-hell.js
```js
const { resolve } = require('dns/promises');

var stepValue = 5;

function addStepFunction(value) {
    return new Promise((resolve) => {
        resolve(value + stepValue);
    });
}

function subStepFunction(value) {
    return new Promise((resolve) => {
        resolve(value - stepValue);
    });
}

function mulStepFunction(value) {
    return new Promise((resolve) => {
        resolve(value * stepValue);
    });
}

async function main() {
    const addStepResult = await addStepFunction(stepValue);
    const subStepResult = await subStepFunction(addStepResult);
    const mulStepResult = await mulStepFunction(subStepResult);

    console.log('Result => ', mulStepResult);
}

main();
```
## Export & Import

## Events and Event Emitter
1. event-emitter-main.js
```js
import { EventEmitter } from 'events' 
var em = new EventEmitter();

//Subscribe for FirstEvent
em.on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');
```