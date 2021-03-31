function _fmap(sheetName) {
    const fieldsSheetName = sheetName + '_fields'
    const fieldsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(fieldsSheetName)
    const fieldLetters = fieldsSheet.getDataRange().getDisplayValues()
    return Object.fromEntries(fieldLetters)
}

function qText(sheetName, query) {
    const fieldLetters = _fmap(sheetName)
    const parts = query.split('%')

    return Array.from(
        parts.entries(),
        ([i, fragment]) => (i%2) ? fieldLetters[fragment] : fragment
    ).join("")
}

function columnLetter(i) {
    if (isNaN(i) || i < 1) {
        throw new Error('unknown column number: ' + i)
    }

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var out = ''
    do {
        out = letters[(i - 1) % 26] + out
        i = Math.floor((i - 1) / 26)
    } while (i != 0)
    return out
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

function columnNames(sheetName) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
    const nameRow = sheet.getRange(1,1,1,sheet.getMaxColumns()).getDisplayValues()[0]
    return nameRow.filter((val) => val !== '')
}

function sheetName() {
    return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getSheetName()
}

function litquery(range, query) {
    const fieldLetters = headermap(range)

    const parts = query.split('%')

    return Array.from(
        parts.entries(),
        ([i, fragment]) => (i%2) ? fieldLetters[fragment] : fragment
    ).join("")
}

/* istanbul ignore if */
if (typeof module === 'undefined') {
    module = {} // eslint-disable-line no-global-assign
}
const gsheet = module.exports = {
    columnLetter,
    headermap,
    litquery,
}
