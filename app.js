const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
