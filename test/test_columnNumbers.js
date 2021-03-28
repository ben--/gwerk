const should = require('chai').should()

const gsheet = require('../gsheet.js')

describe('columnLetter', function() {
    const columnLetter = gsheet.columnLetter

    it('should return A for index 1', function() {
        columnLetter(1).should.equal('A')
    })
    it('should return Z for index 26', function() {
        columnLetter(26).should.equal('Z')
    })

    const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    letters.forEach((l, i) => {
        it('should return ' + l + ' for index ' + (i + 1), function() {
            columnLetter(i + 1).should.equal(l)
        })
    })
})
