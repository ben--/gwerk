const should = require('chai').should()

const gsheet = require('../gsheet.js')

describe('columnLetter', function() {
    const columnLetter = gsheet.columnLetter

    const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    letters.forEach((l, i) => {
        it('should return ' + l + ' for index ' + (i + 1), function() {
            columnLetter(i + 1).should.equal(l)
        })
    })

    const edgeCases = [
        [27, 'AA'],
        [28, 'AB'],
    ]
    edgeCases.forEach(([i, s]) => {
        it('should return ' + s + ' for index ' + i, function() {
            columnLetter(i).should.equal(s)
        })
    })
})
