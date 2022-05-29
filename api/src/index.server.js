const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//routes
const userRoutes = require('./routes/user');
//environment  variable or constance
env.config();
//mongodb connection
//mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.atcgx.mongodb.net/${process.env.MONGO_DB_DATABSE}?retryWrites=true&w=majority`
mongoose
  .connect(
    `mongodb://localhost:27017/shop`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
     
    }
  )
  .then(() => {
    console.log("Database connected");
  });


app.use(bodyParser());

app.use('/api',userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
   