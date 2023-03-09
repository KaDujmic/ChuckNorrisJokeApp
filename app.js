const express = require('express');
const morgan = require('morgan');
const userRouter = require('./router/userRouter');
const authRouter = require('./router/authRouter');
const { errorMiddleware } = require('./utils/callbackErrorHandler');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/user', userRouter);
app.use('/', authRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
