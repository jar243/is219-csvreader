module.exports = class City {

  constructor(inData) {
    for (let key in inData) {
      let privKey = '_' + key
      if (typeof this[privKey] === 'undefined') {
        this[privKey] = inData[key]
      }
      else {
        throw [privKey, 'already set!'].join(' ')
      }
    }
  }

  getCountry() {
    return this._country
  }

  static create(inData) {
    return new City(inData)
  }

}