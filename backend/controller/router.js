/** Package imports */
const express = require('express');
const router = express.Router();

/** File imports */
let indexRouter = require('../routes/index');
let productRouter = require('../routes/product');
let recipeRouter = require('../routes/recipe');


/** Routes */
router.use('/', indexRouter);
router.use('/product', productRouter);
router.use('/recipe', recipeRouter);

/** Exports */
module.exports = {router};
