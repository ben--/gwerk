const should = require('chai').should()

require('./mocks/SpreadsheetApp.js')

const gwerkSheets = require('../gwerk-sheets.js')

describe('sheetName', function() {
    const sheetName = gwerkSheets.sheetName

    it('is called without arguments', function() {
        sheetName()
    })

    it('returns the sheet name', function() {
        const actual = sheetName()

        actual.should.equal('fake sheet name')
    })
})
