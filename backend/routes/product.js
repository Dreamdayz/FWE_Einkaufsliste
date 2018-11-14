/** Package imports **/
const express = require('express');
const router = express.Router({mergeParams: true});
const fs = require('fs');
const mongoose = require('mongoose');

/** File imports **/
const productModel = require('../models/product');

/** Routes **/
router.get('/download/csv', exportCSV);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);


async function getProducts(req, res) {
    try {
        const products = await productModel.find();
        res.send({
            status: 'OK',
            data: products
        });
    } catch (e) {
        res.status(500).send(e);
    }
}

async function getProduct(req, res) {
    try {
        const product = await productModel.findById(req.params.id);

        res.send({
            status: 'OK',
            data: product
        });

    } catch (e) {
        if (e instanceof mongoose.CastError) {
            res.status(404).send({
                status: 'ID NOT FOUND'
            });
        } else {
            res.status(500).send(e);
        }
    }
}

async function createProduct(req, res) {
    try {
        const newProduct = new productModel(req.body);
        const createdProduct = await newProduct.save();
        res.status(201).send({
            status: 'CREATED',
            data: createdProduct
        });
    } catch (e) {
        if (e.name == 'ValidationError') {
            res.status(400).send(e);
        } else {
            res.status(500).send(e);
        }
    }
}

async function deleteProduct(req, res) {
    productModel.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            if (err instanceof mongoose.CastError) {
                res.status(404).send({
                    status: 'ID NOT FOUND'
                });
            }
            else {
                res.status(500).send(e);
            }
        }
        else {
            res.status(200).send({
                status: 'DELETED'
            });
        }
    });
}


async function updateProduct(req, res) {
    try {
        const product = await productModel.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        }, {
            new: true
        });

        res.status(200).send({
            status: 'UPDATED',
            data: product
        });
    } catch (e) {
        if (e instanceof mongoose.CastError) {
            res.status(404).send({
                status: 'ID NOT FOUND'
            });
        } else {
            res.status(500).send(e);
        }
    }
}


/* GET grocerylist as CSV - File. */
async function exportCSV(req, res) {
    const Json2csvParser = require('json2csv').Parser;
    const fields = ['name', 'amount', 'type', 'bought', 'description', 'created_at', 'updatedAt'];
    const products = await productModel.find();
    const json2csvParser = new Json2csvParser({fields, delimiter: ';'});
    const csv = json2csvParser.parse(products);
    const filePath = './resources/Einkaufsliste.csv';
    fs.writeFile(filePath, csv, 'utf8', function (err) {
        if (err) {
            console.log(
                'Some error occured - file either not saved or corrupted file saved.'
            );
            res.status(500).send(err);
        } else {
            console.log('Created CSV File');
            console.log('Sending CSV File');
            res.writeHead(200, {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename=Einkaufsliste.csv'
            });
            let readStream = fs.createReadStream('./resources/Einkaufsliste.csv');
            readStream.pipe(res);
        }
    });
}

module.exports = router;