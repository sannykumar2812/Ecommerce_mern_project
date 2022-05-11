const express = require("express")
const app = express()
const errorMiddleware = require("./middleware/error")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var options = {
    customCss: '.swagger-ui .topbar { display: none }'
};
//Route imports
const product = require('./routes/productRoute')
app.use("/api/v1",product)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));


//middleware for error
app.use(errorMiddleware)

module.exports = app;