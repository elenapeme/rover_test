const { getUserInput, rl } = require("./src/readline");
const { splitBySpaces, splitEachChar } = require("./src/utils");
const Grid = require("./src/Classes/Grid");
const Control = require("./src/Classes/Control");

const main = async () => {
    const w = await getUserInput("Specify the number of rovers:");

    const x = await getUserInput(
        "Specify the size of the grid (like 5 5):"
    );
    console.log("The size of the Grid is", x);
    const grid = new Grid(...splitBySpaces(x));

    const control = new Control(grid);
    for (i = 0; i < w; i++) {
        const inputInitialCoordinates = await getUserInput(
            "Specify the initial coordinates and direction of the mars rover (like 1 2 N):"
        );

        const inputInstructions = await getUserInput(
            "Specify the instructions for the mars rover (like RFRFRFRF):"
        );


        control.addRoverWithInstruction(...splitBySpaces(inputInitialCoordinates), splitEachChar(inputInstructions));
    }

    control.runInstructions();

    console.log(
        `The final coordinates of the mars rover is: ${control.getRoversPosition()}`
    );
    rl.close();
};

main();