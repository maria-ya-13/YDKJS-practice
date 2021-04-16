"use strict";
function fill_the_array(start,end){
    let output_range = [];
    for (let cur_position = start; cur_position <= end; cur_position+=1) {
        output_range.push(cur_position);
    }
    return output_range;
}

function range(start,end='empty') {
    if (Number(start) && Number(end)){
        return fill_the_array(start,end);
    }
    return function complete_range(range_end){
        return fill_the_array(start, range_end);
    }
}


range(3,3); // [3]
range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]
