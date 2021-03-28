const should = require('chai').should()

const gsheet = require('../gsheet.js')

describe('columnLetter', function() {
    const columnLetter = gsheet.columnLetter

    it('should return A for index 1', function() {
        columnLetter(1).should.equal('A')
    })
})
