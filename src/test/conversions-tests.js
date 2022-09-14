const conversionsionsHandler = require('./../handlers/conversions-handler');
const mocha = require('mocha')
const expect = require('chai').expect;


describe('conversions', async () => {

  const { outPutValue: length } = await conversionsionsHandler.convertUnit(6, 'km', 'm')
  const { outPutValue: speed } = await conversionsionsHandler.convertUnit(100, 'm/s', 'km/h')
  const { outPutValue: temperature } = await conversionsionsHandler.convertUnit(10, 'C', 'F')

  mocha.describe('correct length arguments', () => {
    mocha.it('should return correct length conversion', () => {
      expect(length).to.equal(6000)
    })
  })

  mocha.describe('correct speed arguments', () => {
    mocha.it('should return correct speed conversion', () => {
      expect(speed).to.equal(360)
    })
  })

  mocha.describe('correct temperature arguments', () => {
    mocha.it('should return correct speed conversion', () => {
      expect(temperature).to.equal(50)
    })
  })
})
