const should = require('chai').should()

const gwerkSheets = require('../gwerk-sheets.js')

describe('gxlookup', function () {
    const { gxlookup } = gwerkSheets

    it('accepts three arguments', function () {
        gxlookup('foo', ['foo'], ['bar'])
    })

    it('finds its first argument in the second (array) and returns an item from the third', function () {
        const actual = gxlookup('foo', ['foo'], ['bar'])

        actual.should.equal('bar')
    })

    it('does not require stric equality because google sheets doesnt', function () {
        const actual = gxlookup(1, ['1'], ['one'])

        actual.should.equal('one')
    })

    it('scans the second array to find the first match', function () {
        const actual = gxlookup('two', ['one', 'two'], ['first', 'second'])

        actual.should.equal('second')
    })

    it('returns an error if the search value is not found', function () {
        should.Throw(() => gxlookup('three', ['one', 'two'], ['first', 'second']), Error)
    })

    it('returns the ifNotFound (fourth) argument if the serach value is not found', function () {
        const actual = gxlookup('three', ['one', 'two'], ['first', 'second'], 'unknown')

        actual.should.equal('unknown')
    })
})
