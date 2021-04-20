function columnLetter(i) {
    if (!Number.isInteger(i) || i < 1) {
        throw new Error(`unknown column number: ${i}`)
    }

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let out = ''
    do {
        out = letters[(i - 1) % 26] + out
        i = Math.floor((i - 1) / 26)
    } while (i !== 0)
    return out
}

function gxlookup(value, lookupArray, returnArray, ifNotFound) {
    const i = lookupArray.findIndex((e) => e == value) // eslint-disable-line eqeqeq
    if (i === -1) {
        if (typeof ifNotFound === 'undefined') {
            throw new Error('Could not find value in lookupArray')
        } else {
            return ifNotFound
        }
    }
    return returnArray[i]
}

function headermap(range) {
    const out = {}
    range[0].forEach((val, i) => {
        if (val !== '') {
            out[val] = columnLetter(i + 1)
        }
    })
    return out
}

function headerinfo(range) {
    const out = []
    range[0].forEach((val, i) => {
        if (val !== '') {
            out.push([val, columnLetter(i + 1), i])
        }
    })

    return out
}

function sheetName() {
    return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getSheetName()
}

function litquery(range, query) {
    const fieldLetters = headermap(range)

    const parts = query.split('%')

    if (parts.length % 2 === 0) {
        throw new Error('Unterminated %token% found in input string')
    }

    return Array.from(
        parts.entries(),
        ([i, fragment]) => ((i % 2) ? fieldLetters[fragment] : fragment),
    ).join('')
}

/* istanbul ignore if */
if (typeof module === 'undefined') {
    module = {} // eslint-disable-line no-global-assign
}
module.exports = {
    columnLetter,
    gxlookup,
    headerinfo,
    headermap,
    litquery,
    sheetName,
}
