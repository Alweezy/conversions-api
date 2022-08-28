'use strict'

const express = require('express');
const { parseInt } = require('lodash');
const conversionsHandler = require('./../handlers/conversions-handler')
const router = express.Router();


router.get('/convert', async (req, res) => {
  try {
    const {fromOption, toOption, inputValue } = req.query

    const allParams = fromOption && toOption && inputValue
    if(!allParams) {
      res.status(400).send({missingParameter: "bad request"})
    }
    const value = parseInt(inputValue)
    const convert = await conversionsHandler.convertUnit(value, fromOption, toOption)
    // res.json(convert)
    res.send(convert)
  } catch (error) {
    res.status(500).send({Error: error.message})
  }
})

module.exports = router