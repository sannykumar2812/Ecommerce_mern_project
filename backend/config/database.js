const mongoose = require('mongoose');



const connectDatabase = ()=>{
    // connction and after port db name Ecommerce 127.0.0.1
mongoose.connect(process.env.DB_URI,{useCreateIndex:true,useUnifiedTopology:true,
    useNewUrlParser:true}).then(()=>{
        console.log(`mongodb connection with server successfully..!!`)
    })
}

module.exports=connectDatabase;