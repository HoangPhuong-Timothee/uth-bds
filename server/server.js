const express = require('express');
const mongoose = require('mongoose')
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const listingRouter = require('./routes/listing.route');
const cookieParser = require('cookie-parser');
require('dotenv').config()
// const path = require('path');

const app = express();

//Connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connect to database successfully!');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
// app.use(express.static(path.join(__dirname, '/client/dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });