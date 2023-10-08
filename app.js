const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/users');
const connectDB = require('./db/connect');
require('dotenv').config();
require('express-async-error');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const feedRouter = require('./routes/feeds');
const protect = require('./middleware/authentication');
const expressFileUpload = require('express-fileupload');
// middleware
app.use(express.json()); //parse into json response
app.use(cors());
app.use(expressFileUpload());

// public route
app.use(express.static('./public'));

// routes
app.use('/daycare/api/users', userRouter);
app.use('/daycare/api/dashboard', protect, feedRouter);

//Error middleware
app.use(notFound);
app.use(errorHandler);

// Server port
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(
      process.env.MONGO_URI,
      console.log(`Database connection is successful..`)
    );
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
