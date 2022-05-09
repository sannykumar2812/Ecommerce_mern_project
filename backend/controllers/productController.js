const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")


//create Product  --Admin
exports.createProduct = catchAsyncErrors((async (req, res) => {
    // let images = [];

    // if (typeof req.body.images === "string") {
    //     images.push(req.body.images);
    // } else {
    //     images = req.body.images;
    // }

    // const imagesLinks = [];

    // for (let i = 0; i < images.length; i++) {
    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //         folder: "products",
    //     });

    //     imagesLinks.push({
    //         public_id: result.public_id,
    //         url: result.secure_url,
    //     });
    // }

    // req.body.images = imagesLinks;
    // req.body.user = req.user.id;

    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
}));





//get All products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
})


//update Products --Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    })

    res.json({
        sucess: true,
        product
    })
})


//Delete Product 

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
})


// Get Product Details
exports.getProductDetails = catchAsyncErrors((async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        product,
    });
}))