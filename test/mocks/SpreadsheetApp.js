const { Spreadsheet } = require('./Spreadsheet.js')

const activeSpreadsheet = new Spreadsheet()

class SpreadsheetApp {
    static getActiveSpreadsheet() {
        return activeSpreadsheet
    }
}

global.SpreadsheetApp = SpreadsheetApp
