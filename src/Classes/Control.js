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
    };


    getRoversPosition() {
        let fallenRover = false;
        let fallenRoverPosition = [];
        return this.rovers.map(rover =>{
            if (rover.x < this.grid.getMaxXAxis() || rover.y < this.grid.getMaxYAxis()) {
                return rover.getPosition();
            } else {
                if (fallenRover === false) {
                    // add coordinates of fallen rovers
                    fallenRoverPosition.push({x: rover.x, y: rover.y});
                    fallenRover = true;
                    return rover.getFallenPosition();
                } else {
                    // check the previous coordinates of fallen rovers
                    return fallenRoverPosition.map(e => {
                        if (e.x === rover.x || e.y === rover.y) {
                            return rover.getPosition();
                        } else {
                            // add coordinates of fallen rovers because they are still not added
                            fallenRoverPosition.push({x: rover.x, y: rover.y});
                            return rover.getFallenPosition();
                        }
                    })
                }

            }
        });
    }

}

module.exports = Control;