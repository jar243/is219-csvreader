const CsvReader = require('../src/utils/csvreader')
const City = require('../src/models/city')
const pathToCsv = './data/sampledata.csv'

test('CsvReader returns correct number of City Objects', () => {
  let cities = CsvReader.getRecords(pathToCsv, City)
  expect(cities.length).toBe(6);
});

test('CsvReader returns City objects', () => {
  let cities = CsvReader.getRecords(pathToCsv, City)
  expect(cities.pop() instanceof City).toBe(true);
});