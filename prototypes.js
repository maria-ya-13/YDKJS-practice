"use strict";
function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: [
        "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        return this.symbols[this.position];
    }
};

function get_reel_simbol(temp_reel, shift){
    temp_reel.position = (temp_reel.symbols.length + temp_reel.position + shift) % temp_reel.symbols.length;
    return temp_reel.display();
}

var slotMachine = {
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
        });
    },
    display() {
        var matrix = [[],[],[]];
        this.reels.forEach(function displayReel(reel){
            var num_of_reels = 3
            for (let pos = -1 * Math.trunc(num_of_reels/2); pos <= num_of_reels -1; pos++){
                for (let line=0; line <=matrix.length; line++){
                    matrix[line].push(get_reel_simbol(reel, pos));
                }
            }
        });
        for (let cur_pos of matrix){
            console.log(`${cur_pos[0]} | ${cur_pos[1]} | ${cur_pos[2]}`);
        }
    }
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★