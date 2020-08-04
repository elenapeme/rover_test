const { NORTH, EAST, SOUTH, WEST } = require("../utils");

class Rover  {
    constructor(x, y, direction) {
        this.x = Number.parseInt(x);
        this.y = Number.parseInt(y);
        this.direction = direction;
    }

    //MOVEMENT
    turnRight() {
        switch (this.direction) {
            case NORTH:
                this.direction = EAST;
                break;
            case EAST:
                this.direction = SOUTH;
                break;
            case SOUTH:
                this.direction = WEST;
                break;
            case WEST:
                this.direction = NORTH;
                break;
        }
    }

    turnLeft() {
        switch (this.direction) {
            case NORTH:
                this.direction = WEST;
                break;
            case EAST:
                this.direction = NORTH;
                break;
            case SOUTH:
                this.direction = EAST;
                break;
            case WEST:
                this.direction = SOUTH;
                break;
        }
    }

    forward() {
        switch (this.direction) {
            case EAST:
                this.x += 1;
                break;
            case WEST:
                this.x -= 1;
                break;
            case NORTH:
                this.y += 1;
                break;
            case SOUTH:
                this.y -= 1;
                break;
        }
    }

    //OUTPUT POSITION OF THE ROVERS
    //when the rover does not fall over the grid
    getPosition() {
        return `${this.x} ${this.y} ${this.direction}// `;
    }

    //when the rover falls over the grid
    getFallenPosition() {
        return `${this.x} ${this.y} ${this.direction} LOST// `;
    }
}

module.exports = Rover;