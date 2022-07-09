const mongoose = require('mongoose');
const Hostel = require("../models/Hostel.js");
const url='mongodb+srv://agile:agile@cluster0.qtsfz.mongodb.net/AgileThriftStore?retryWrites=true&w=majority';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})

//testing product
describe(' Add product testing ', ()=>{
    it('Add product testing ', ()=>{
        const productTest={
            productname: "Shirt",
            productprice:"200",
            productStatus:"Active", 
            productcategory:"Mens Shirt",      
            productinstok:"3",
            productoffer:"20",  
            rating:"5", 
        }
        return Hostel.create(addhostelTest).then((pro_ret)=>{
            expect(pro_ret.name).toEqual("hostel88")
        })
    })
})