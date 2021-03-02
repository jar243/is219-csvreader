const fs = require('fs')
const path = require('path')
const parse = require('csv-parse/lib/sync')
const parseOptions = {
  columns: true,
  delimiter: ',',
  trim: true,
  skip_empty_lines: true
};

module.exports = class CsvReader {

  constructor() {

  }

  static getRecords(csvFilePath, Model) {
    let fullPath = path.resolve(csvFilePath)
    let csvStr = fs.readFileSync(fullPath, 'utf-8')
    let entries = parse(csvStr, parseOptions)
    let output = []
    for (let i in entries) {
      output.push(Model.create(entries[i]))
    }
    return output
  }

}