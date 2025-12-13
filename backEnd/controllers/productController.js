const Product = require('../models/Product');

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  Public
 */
const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    Fetch single product
 * @route   GET /api/products/:id
 * @access  Public
 */
const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.status(200).json({
                success: true,
                data: product,
            });
        } else {
            res.status(404);
            throw new Error('Product not found');
        }
    } catch (error) {
        // CastError usually means invalid ObjectId
        if (error.name === 'CastError') {
            res.status(404);
            error.message = 'Product not found';
        }
        next(error);
    }
};

/**
 * @desc    Create a product
 * @route   POST /api/products
 * @access  Public (for now, usually Admin/Private)
 */
const createProduct = async (req, res, next) => {
    try {
        const {
            name,
            description,
            price,
            stock_quantity,
            sku,
            category,
            image_url,
            model_3d_url,
        } = req.body;

        if (!name || !price || !sku) {
            res.status(400);
            throw new Error('Please add all required fields');
        }

        const product = new Product({
            name,
            description,
            price,
            stock_quantity,
            sku,
            category,
            image_url,
            model_3d_url,
        });

        const createdProduct = await product.save();
        res.status(201).json({
            success: true,
            data: createdProduct,
        });
    } catch (error) {
        if (error.code === 11000) { // Duplicate key error (e.g. SKU)
            res.status(400);
            error.message = 'Product with this SKU already exists';
        }
        next(error);
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
};
