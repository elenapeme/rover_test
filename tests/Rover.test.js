const Rover = require("../src/Classes/Rover");


test("Initial position of the Rover", () => {
    testRover = new Rover(2, 1, "E");
    expect(testRover.x).toBe(2);
    expect(testRover.y).toBe(1);
    expect(testRover.direction).toBe("E");
});

test('return position of the rover', () => {
    const testRover = new Rover(2, 1, "E");

    expect(testRover.getPosition()).toBe("2 1 E");
});

describe("rover turning right", () => {
    test("facing north change direction to east", () => {
        const testRover = new Rover(2, 1, "N");
        testRover.turnRight();
        expect(testRover.getPosition()).toBe("2 1 E");
    });

    test("facing east change direction to south", () => {
        const testRover = new Rover(2, 1, "E");
        testRover.turnRight();
        expect(testRover.getPosition()).toBe("2 1 S");
    });

    test("facing south change direction to west", () => {
        const testRover = new Rover(2, 1, "S");
        testRover.turnRight();
        expect(testRover.getPosition()).toBe("2 1 W");
    });

    test("facing west change direction to north", () => {
        const testRover = new Rover(2, 1, "W");
        testRover.turnRight();
        expect(testRover.getPosition()).toBe("2 1 N")
    })
});

describe("rover turning left", () => {
    test("facing north change direction to west", () => {
        const testRover = new Rover(2, 1, "N");
        testRover.turnLeft();
        expect(testRover.getPosition()).toBe("2 1 W");
    });

    test("facing west change direction to south", () => {
        const testRover = new Rover(2, 1, "W");
        testRover.turnLeft();
        expect(testRover.getPosition()).toBe("2 1 S");
    });

    test("facing south change direction to east", () => {
        const testRover = new Rover(2, 1, "S");
        testRover.turnLeft();
        expect(testRover.getPosition()).toBe("2 1 E");
    });

    test("facing east change direction to north", () => {
        const testRover = new Rover(2, 1, "E");
        testRover.turnLeft();
        expect(testRover.getPosition()).toBe("2 1 N");
    })
});

describe("rover moving forward and backward", () => {
    test("rover moves forward by 1 in X when rover is facing east", () => {
        const testRover = new Rover(2, 2, "E");
        testRover.forward();
        expect(testRover.getPosition()).toBe("3 2 E");
    });

    test("rover moves backward by 1 in X when rover is facing west", () => {
        const testRover = new Rover(2, 2, "W");
        testRover.forward();
        expect(testRover.getPosition()).toBe("1 2 W");
    });

    test("rover moves forward by 1 in Y when rover is facing north", () => {
        const testRover = new Rover(2, 2, "N");
        testRover.forward();
        expect(testRover.getPosition()).toBe("2 3 N");
    });

    test("rover moves backward by 1 in Y when rover is facing south", () => {
        const testRover = new Rover(2, 2, "S");
        testRover.forward();
        expect(testRover.getPosition()).toBe("2 1 S");
    });
});