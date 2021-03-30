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

    it.skip('replaces a %-delimited token with its column', function() {
        const actual = litquery(testRange, 'select %action%')

        actual.should.equal('select B')
    })
})
