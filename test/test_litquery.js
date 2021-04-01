const should = require('chai').should()

const gsheet = require('../gsheet.js')

describe('litquery', function() {
    const litquery = gsheet.litquery

    const testRange = [
        ['id', 'action', 'date'],
        [   1,   'sale', '2020-11-25'],
        [   2,   'sale', '2020-11-26'],
        [   3, 'return', '2020-12-26'],

    ]

    it('takes a range and a string as its arguments', function() {
        litquery(testRange, 'select A')
    })

    it('returns a query with no special characters as-is', function() {
        const actual = litquery(testRange, 'select A')

        actual.should.equal('select A')
    })

    it('replaces a %-delimited token with its column', function() {
        const actual = litquery(testRange, 'select %action%')

        actual.should.equal('select B')
    })

    it('replaces more than one token with their columns', function() {
        const actual = litquery(testRange, 'select %id%, %action%')

        actual.should.equal('select A, B')
    })

    it('is impervious to column reordering', function() {
        const transposedRange = [['id', 'date', 'action']]

        const actual = litquery(transposedRange, 'select %id%, %action%')

        actual.should.equal('select A, C')
    })

    it('can handle duplicates of the same column', function() {
        const actual = litquery(testRange, "select %id%, %action% where %action% = 'sale'")

        actual.should.equal("select A, B where B = 'sale'")
    })

    it('throws when an unbalanced token is found', function() {
        should.Throw(() => litquery(testRange, 'select %id'), Error)
    })
})
