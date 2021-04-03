const should = require('chai').should()

const gwerkSheets = require('../gwerk-sheets.js')

describe('headermap', function() {
    const headermap = gwerkSheets.headermap

    const testRange = [
        ['id', 'action', 'date'],
        [   1,   'sale', '2020-11-25'],
    ]

    it('takes a range as input', function() {
        headermap(testRange)
    })

    it('returns a lookup map', function() {
        const actual = headermap(testRange)

        should.exist(actual['id'])
    })

    it('maps each header to its column letter', function() {
        const actual = headermap(testRange)

        actual['id'].should.equal('A')
        actual['action'].should.equal('B')
        actual['date'].should.equal('C')
    })

    it('only includes items from the input list', function() {
        const actual = headermap(testRange)

        should.not.exist(actual['item'])
    })

    it('should only include entries for non-empty cells', function() {
        const actual = headermap([['', 'action', 'date', '']])

        Object.keys(actual).length.should.equal(2)
    })

    it('should throw on non-range input', function() {
        should.Throw(() => headermap(), Error)
        should.Throw(() => headermap('hello'), Error)
        should.Throw(() => headermap({}), Error)
    })
})
