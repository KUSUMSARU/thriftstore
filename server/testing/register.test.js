const customer = require('../modules/customer');
const mongoose = require('mongoose');

 /// test //
const url ='mongodb+srv://agile:agile@cluster0.qtsfz.mongodb.net/AgileThriftStore?retryWrites=true&w=majority';
beforeAll(async()=>{
    await mongoose.connect(url,{
        useNewUrlParser:true,
    });
});
afterAll(async()=>{
    await mongoose.connection.close();
});
describe('register testing',()=>{
    //testing for instering student
    it ('Add user testing instering',()=>{
        const customer ={
            "name":"Divya Budhathoki",
            'email':"divyabudhtoki@12@gmail.com",
            'password':"divya1234",
            'confirmpassword':"divya1234",
        };
    });
});