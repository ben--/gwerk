require('chai').should()
const sinon = require('sinon')

require('./mocks/SpreadsheetApp.js')

const gwerkSheets = require('../gwerk-sheets.js')

describe('sheetName', function () {
    const { sheetName } = gwerkSheets

    it('is called without arguments', function () {
        sheetName()
    })

    it('returns the sheet name', function () {
        const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
        sinon.stub(activeSheet, 'getSheetName').returns('fake sheet name')

        const actual = sheetName()

        actual.should.equal('fake sheet name')
    })
})
