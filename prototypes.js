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

function get_reel_simbol(position, shift){
    let temp_reel = Object.create(reel);
    temp_reel.position = position + shift;
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
            matrix[0].push(get_reel_simbol(reel.position, -1));
            matrix[1].push(reel.display());
            matrix[2].push(get_reel_simbol(reel.position, 1));
        });
        for (var cur_pos of matrix){
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