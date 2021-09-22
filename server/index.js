const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// setup server
const app = express();
app.use(cors({ origin: true }));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`server started on port ${PORT}`);
});

//to convert all requests to json objects
app.use(express.json());

//connect to mongo db

mongoose.connect(
   process.env.MDB_CONNECT,
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   },
   (err) => {
      if (err) return console.error(err);
      console.log('connected to mongodb');
   }
);

//setup routes

app.use('/auth', require('./routers/userRouter'));
