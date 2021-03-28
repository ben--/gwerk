const should = require('chai').should()

const gsheet = require('../gsheet.js')

describe('columnLetter', function() {
    const columnLetter = gsheet.columnLetter

    it('should return A for index 1', function() {
        columnLetter(1).should.equal('A')
    })

    const letters = [...'AB']
    letters.forEach((l, i) => {
        it('should return ' + l + ' for index ' + (i + 1), function() {
            columnLetter(i + 1).should.equal(l)
        })
    })
})
