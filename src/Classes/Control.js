const Rover = require("./Rover");

class Control {
    constructor(grid) {
        this.grid = grid;
        this.rovers = [];
        this.instructions = [];
    }
    addRoverWithInstruction(x, y, direction, instruction) {
        this.rovers = [...this.rovers, new Rover(x, y, direction)];
        this.instructions = [...this.instructions, instruction];
    }

    runInstructions() {
        const numOfRovers = this.rovers.length;

        for (let i = 0; i < numOfRovers; i++) {
            this.runSingleRoverInstructions(i);
        }
    }

    runSingleRoverInstructions(i) {
        this.instructions[i].forEach(instruction => {
            switch (instruction) {
                case "R":
                    this.rovers[i].turnRight();
                    break;
                case "L":
                    this.rovers[i].turnLeft();
                    break;
                case "F":
                    this.rovers[i].forward();
                    break;
            }
        });
    }

    getRoversPosition() {
        return this.rovers.map(rover =>{
            if (rover.x < this.grid.getMaxXAxis() || rover.y < this.grid.getMaxYAxis()) {
                return rover.getPosition();
            } else {
                return rover.getFallenPosition();
            }
        });
    }

}

module.exports = Control;