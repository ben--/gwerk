require('chai').should()

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

    it('scans the second array to find the first match', function () {
        const actual = gxlookup('two', ['one', 'two'], ['first', 'second'])

        actual.should.equal('second')
    })
})
