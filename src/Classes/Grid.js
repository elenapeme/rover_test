class Grid {
    constructor(maxXAxis, maxYAxis) {
        this.maxXAxis = maxXAxis;
        this.maxYAxis = maxYAxis;
    }

    getMaxXAxis() {
        return this.maxXAxis;
    }

    getMaxYAxis() {
        return this.maxYAxis;
    }
}

module.exports = Grid;