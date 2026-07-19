const express = require("express")
const router = express.Router()
const Product = require("../models/Product")
const { protect, adminOnly } = require("../middleware/auth")

// GET /api/products - get all products
router.get("/", async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        })
    } catch (error) {
        next(error)
    }
})

// GET /api/products/search?q=.. - search by title or region
router.get("/search", async (req, res, next) => {
    try {
        const q = req.query.q || ""

        if (!q) {
            return res.status(400).json({
                success: false,
                message: "Please provide a search query using ?q="
            })
        }

        // MongoDB regex search — case insensitive
        const results = await Product.find({
            $or: [
                { title: { $regex: q, $options: "i" } },
                { region: { $regex: q, $options: "i" } },
                { category: { $regex: q, $options: "i" } }
            ]
        })

        res.status(200).json({
            success: true,
            count: results.length,
            data: results
        })
    } catch (error) {
        next(error)
    }
})

// GET api/products/:id - get single product
router.get("/:id", async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({
                success: false,
                message: `Product with id ${req.params.id} not found`
            })
        }

        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        next(error)
    }
})


// POST api/products - create new product
router.post("/", protect, async (req, res, next) => {
    try {
        const product = await Product.create(req.body)

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        })
    } catch (error) {
        // mongoose validation errors come through as error.name === "ValidationError"
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map(e => e.message)
            return res.status(400).json({
                success: false,
                message: messages.join(", ")
            })
        }
        next(error)
    }
})

// PUT /api/products/:id — update product
router.put("/:id", protect, async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,          // return the updated document, not the old one
                runValidators: true // run schema validators on update too
            }
        )

        if (!product) {
            return res.status(404).json({
                success: false,
                message: `Product with id ${req.params.id} not found`
            })
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product
        })
    } catch (error) {
        next(error)
    }
})

// DELETE /api/products/:id — delete product
router.delete("/:id", protect, async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        if (!product) {
            return res.status(404).json({
                success: false,
                message: `Product with id ${req.params.id} not found`
            })
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router
