function _fmap(sheetName) {
    sheetName="Foo"
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

function columnNames(sheetName) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
    const nameRow = sheet.getRange(1,1,1,sheet.getMaxColumns()).getDisplayValues()[0]
    return nameRow.filter((val) => val !== '')
}

function sheetName() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getSheetName()
}
