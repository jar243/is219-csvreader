const City = require('../src/models/city')

test('City Model can be created via static factory method', () => {
  let city = City.create({ 'test': '123' })
  expect(city instanceof City).toBe(true);
});