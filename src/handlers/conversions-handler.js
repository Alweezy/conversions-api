// const { convert } = require('convert');
const convert = require('convert-units')

const convertUnit = async(inputValue, fromOption, toOption) => {
  try {
    // const value = convert(inputValue, fromOption).to(toOption)
    const value = convert(inputValue).from(fromOption).to(toOption)
    return {outPutValue: value}
  } catch(error) {
    throw(error)
  }
}

module.exports = {
  convertUnit
}