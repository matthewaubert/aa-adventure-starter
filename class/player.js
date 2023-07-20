class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // splice item from room.items array
        const index = this.currentRoom.items.findIndex(item => item.name === itemName);
        const item = this.currentRoom.items.splice(index, 1);
        this.items.push(...item); // push this item to this player.items array
    }

    dropItem(itemName) {
        // splice item from player.items array
        const index = this.items.findIndex(item => item.name === itemName);
        const item = this.items.splice(index, 1);
        this.currentRoom.items.push(...item); // push this item to room.items array
    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {
        // iterate through player items to find item.name equal to name
        return this.items.find(item => item.name === name);
    }
}

module.exports = {
  Player,
};



/****************************** TESTS ******************************/
// const { Item } = require("./item");
// const { Room } = require("./room");

// let item = new Item("rock", "just a simple rock");
// let room = new Room("Test Room", "A test room");
// let player = new Player("player", room);

// room.items.push(item);
// console.log(room.items.length); // 1
// console.log(player.items.length); // 0

// player.takeItem("rock");
// console.log(room.items.length); // 0
// console.log(player.items.length); // 1

// console.log(player.getItemByName("rock")); // rock item