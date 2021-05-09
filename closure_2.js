"use strict";

function toggle(...input_array) {
    var arr = input_array;
    var eArr = arr[Symbol.iterator]();
    return function next() {
        let cur = eArr.next();
        arr.push(cur.value);
        console.log(cur.value);
        return cur.value;
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
