//You will pass one or more values (as arguments) into toggle(..), and get back a function.
// That returned function will alternate/rotate between all the passed-in values in order, one at a time, as it's called repeatedly.

function toggle(input_array) {
    var storage = [];
    storage.push(input_array);
    var iter = storage[Symbol.iterator]();
    // let result = iter.next();
    // console.log(result.value);

    return function get_next() {
        // iter = storage[Symbol.iterator]();
        let result = iter.next();
        // iter = storage[++Symbol.iterator]()
        console.log(result.value);

     }
}

var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");

hello();      // "hello"
hello();      // "hello"

onOff();      // "on"
onOff();      // "off"
onOff();      // "on"

speed();      // "slow"
speed();      // "medium"
speed();      // "fast"
speed();      // "slow"
