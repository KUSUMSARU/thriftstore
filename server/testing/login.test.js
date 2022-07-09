const mongoose = require('mongoose');
const User = require("../models/User.js");
const url='mongodb+srv://agile:agile@cluster0.qtsfz.mongodb.net/AgileThriftStore?retryWrites=true&w=majority';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})

//login testing
describe("singuptesting", () => {
    it("can sign up as new user", async () => {
      // we will write this function next
      email="divya12@gmail.com",
      password= "divya12S"
    })
  });