const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : {
        type: String,
        require:[true,"Please enter product Name"]
    },
    description : {
        type: String,
        require:[true,"Please enter product Description"]
    },
    price:{
        type: Number,
        require:[true,"Please enter product Price"],
        maxLength : [8,"Price cannot exceed 8 Caracters"]
    },
    rating:{
        type:Number,
        default:0
    },
    category: {
        type: String,
        require: [true, "Please Enter Product Category"],
    },

    // for images we use cloudNavi because we get public_id and url ffrom here
    images: [
        {
        public_id: {
            type: String,
            require: true,
        },
        url: {
            type: String,
            require: true,
        },
        },
    ],
    
    Stock: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                require: true,
            },
            name: {
                type: String,
                require: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],  
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     required: true,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type:Date,
        default :Date.now
    }
});
    
module.exports = mongoose.model("Product", productSchema);
    
