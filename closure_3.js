"use strict";

function formatTotal(display) {
    if (Number.isFinite(display)) {
        // constrain display to max 11 chars
        let maxDigits = 11;
        // reserve space for "e+" notation?
        if (Math.abs(display) > 99999999999) {
            maxDigits -= 6;
        }
        // reserve space for "-"?
        if (display < 0) {
            maxDigits--;
        }

        // whole number?
        if (Number.isInteger(display)) {
            display = display
                .toPrecision(maxDigits)
                .replace(/\.0+$/,"");
        }
        // decimal
        else {
            // reserve space for "."
            maxDigits--;
            // reserve space for leading "0"?
            if (
                Math.abs(display) >= 0 &&
                Math.abs(display) < 1
            ) {
                maxDigits--;
            }
            display = display
                .toPrecision(maxDigits)
                .replace(/0+$/,"");
        }
    }
    else {
        display = "ERR";
    }
    return display;
}

function get_new_number(input_digit_1, input_digit_2, operator){
    let digit_1 = Number(input_digit_1);
    let digit_2 = Number(input_digit_2);
    if (operator === '+'){ return digit_1+digit_2; }
    else if (operator === '-'){ return digit_1-digit_2; }
    else if (operator === '/'){ return digit_1/digit_2; }
    else if (operator === '*'){ return digit_1*digit_2; }
}

function calculator() {
    var cur_digit = '';
    var operation = '=';

    var res = 0;
    return function compute(symbol){
        if (Number(symbol)) {
            cur_digit += symbol;
            return symbol;
        }
        else if (symbol == '=' && operation != '='){
            let cur_res = get_new_number(cur_digit,symbol,operation)
            operation = '=';
            cur_digit = '';
            return formatTotal(cur_res);
        }
        else if (/[+-/*]/.test(symbol)){
            if(cur_digit != ''){
                if(operation != '='){
                    compute('=');
                }
                else{
                    res = Number(cur_digit);
                }
            }
            operation = symbol;
            cur_digit = '';
            return symbol;

        }
        return '';

    }
}

var calc = calculator();

calc("4");     // 4
calc("+");     // +
calc("7");     // 7
calc("3");     // 3
calc("-");     // -
calc("2");     // 2
calc("=");     // 75
calc("*");     // *
calc("4");     // 4
calc("=");     // 300
calc("5");     // 5
calc("-");     // -
calc("5");     // 5
calc("=");     // 0