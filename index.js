const express = require('express');
const morgan  = require('morgan');

const cors = require('cors');
const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(morgan('combined'));

app.get('/test', (req, res) => {
  res.send({status: "up and running ..."})
});

app.listen(port, () => {
  console.log(`server listening on port ===> ${port}`)
})