const NORTH = "N";
const EAST = "E";
const SOUTH = "S";
const WEST = "W";

const LEFT = "L";
const RIGHT = "R";
const FORWARD = "F";


// PARSING INPUT
const splitBySpaces = input => {
    return input.split(" ");
};

const splitEachChar = input => {
    return input.split("");
};

module.exports = { NORTH, EAST, SOUTH, WEST, LEFT, RIGHT, FORWARD, splitBySpaces, splitEachChar};