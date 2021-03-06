const should = require('chai').should()

const gwerkSheets = require('../gwerk-sheets.js')

describe('columnLetter', function () {
    const { columnLetter } = gwerkSheets

    const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    // eslint-disable-next-line mocha/no-setup-in-describe
    letters.forEach((l, i) => {
        it(`should return ${l} for index ${i + 1}`, function () {
            columnLetter(i + 1).should.equal(l)
        })
    })

    const edgeCases = [
        [27, 'AA'],
        [28, 'AB'],
        [52, 'AZ'],
        [53, 'BA'],
        [79, 'CA'],
        [677, 'ZA'],
        [702, 'ZZ'],
        [703, 'AAA'],
        [16384, 'XFD'],
    ]
    // eslint-disable-next-line mocha/no-setup-in-describe
    edgeCases.forEach(([i, s]) => {
        it(`should return ${s} for index ${i}`, function () {
            columnLetter(i).should.equal(s)
        })
    })

    const throwCases = [
        0,
        -1,
        undefined,
        null,
        'A',
    ]
    // eslint-disable-next-line mocha/no-setup-in-describe
    throwCases.forEach((input) => {
        it(`should throw an error for input ${input}`, function () {
            should.Throw(() => columnLetter(input), Error)
        })
    })
})
