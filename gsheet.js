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
    const letters = 'AB'
    return letters[i - 1]
}

function columnNames(sheetName) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
    const nameRow = sheet.getRange(1,1,1,sheet.getMaxColumns()).getDisplayValues()[0]
    return nameRow.filter((val) => val !== '')
}

function sheetName() {
    return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getSheetName()
}

/* istanbul ignore if */
if (typeof module === 'undefined') {
 module = {} // eslint-disable-line no-global-assign
}
const gsheet = module.exports = {
    columnLetter
}
