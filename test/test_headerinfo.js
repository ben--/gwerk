const should = require('chai').should()

const gwerkSheets = require('../gwerk-sheets.js')

describe('headerinfo', function () {
    const { headerinfo } = gwerkSheets

    const testRange = [
        ['id', 'action', 'date'],
        [   1,   'sale', '2020-11-25'],
    ]

    it('takes a range as input', function () {
        headerinfo(testRange)
    })

    it('returns a lookup array (of arrays)', function () {
        const actual = headerinfo(testRange)

        actual.should.be.an('array')
        actual[0].should.be.an('array')
    })

    it('maps each header to its column letter', function () {
        const actual = headerinfo(testRange)

        actual[0][0].should.equal('id')
        actual[0][1].should.equal('A')
    })

    it('maps each header to its column index', function () {
        const actual = headerinfo(testRange)

        actual[0][0].should.equal('id')
        actual[0][2].should.equal(0)
    })

    it('should return a row for each column', function () {
        const actual = headerinfo(testRange)

        actual[0][0].should.equal('id')
        actual[1][0].should.equal('action')
        actual[2][0].should.equal('date')
    })

    it('only includes items from the input list', function () {
        const actual = headerinfo(testRange)

        actual.length.should.equal(3)
    })

    it('should only include entries for non-empty cells', function () {
        const actual = headerinfo([['', 'action', 'date', '']])

        actual.length.should.equal(2)
        actual[0][0].should.equal('action')
        actual[1][0].should.equal('date')
    })

    it('should return an empty list on input with an empty header row', function () {
        const actual = headerinfo([['', '', '', '']])

        actual.length.should.equal(0)
    })

    it('should throw on non-range input', function () {
        should.Throw(() => headerinfo(), Error)
        should.Throw(() => headerinfo('hello'), Error)
        should.Throw(() => headerinfo({}), Error)
    })
})
