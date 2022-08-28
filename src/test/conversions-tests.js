const conversionsionsHandler = require('./../handlers/conversions-handler');
const expect = require('chai').expect;


describe('conversions', async () => {

  const { outPutValue: length } = await conversionsionsHandler.convertUnit(6, 'km', 'm')
  const { outPutValue: speed } = await conversionsionsHandler.convertUnit(100, 'm/s', 'km/h')
  const { outPutValue: temperature } = await conversionsionsHandler.convertUnit(10, 'C', 'F')

  context('correct length arguments', () => {
    it('shoud return correct length conversion', () => {
      expect(length).to.equal(6000)
    })
  })

  context('correct speed arguments', () => {
    it('shoud return correct speed conversion', () => {
      expect(speed).to.equal(360)
    })
  })

  context('correct temperature arguments', () => {
    it('shoud return correct speed conversion', () => {
      expect(temperature).to.equal(50)
    })
  })
})