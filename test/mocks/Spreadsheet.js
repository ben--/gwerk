const { Sheet } = require('./Sheet.js')

class Spreadsheet {
    constructor() {
        this.activeSheet = new Sheet()
    }

    getActiveSheet() {
        return this.activeSheet
    }
}

module.exports = { Spreadsheet }
