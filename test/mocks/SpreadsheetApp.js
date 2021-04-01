var sinon = require('sinon')

class Sheet {
    getSheetName = sinon.fake.returns('fake sheet name')
}

class Spreadsheet {
    getActiveSheet = sinon.fake.returns(new Sheet())
}

SpreadsheetApp = {
    getActiveSpreadsheet: sinon.fake.returns(new Spreadsheet())
}
