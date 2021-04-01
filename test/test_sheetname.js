const should = require('chai').should()

require('./mocks/SpreadsheetApp.js')
const gsheet = require('../gsheet.js')

describe('sheetName', function() {
    const sheetName = gsheet.sheetName

    it('is called without arguments', function() {
        sheetName()
    })

    it('returns the sheet name', function() {
        const actual = sheetName()

        actual.should.equal('fake sheet name')
    })
})
