const express = require("express")
const router = express.Router()
const { products } = require("../data/store")

// GET /api/products - get all products
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    })
})

// GET /api/products/search?q=.. - search by title or region
router.get("/search", (req, res) => {
    const q = req.query.q || ""

    if (!q) {
        return res.status(400).json({
            success: false,
            message: "Please provide a search query using ?q="
        })
    }

    const results = products.filter(p =>
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.region.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase())
    )

    res.status(200).json({
        success: true,
        count: results.length,
        data: results
    })
})

// GET api/products/:id - get single product
router.get("/:id", (req, res) => {
    const product = products.find(p => p.id === req.params.id)

    if (!product) {
        return res.status(404).json({
            success: false,
            message: `product with ${req.params.id} not found`
        })
    }

    res.status(200).json({
        success: true,
        data: product
    })
})


// POST api/products - create new product
router.post("/", (req, res) => {
    const { title, region, material, size, price, moq, category } = req.body

    //basic validation
    if (!title || !region || !material || !price) {
        return res.status(400).json({
            success: false,
            message: "title, region, material and price are required"
        })
    }

    const newProduct = {
        id: String(Date.now()),
        title,
        region,
        material,
        size: size || "",
        price: Number(price),
        moq: Number(moq) || 1,
        category: category || "others",
        ai: false,
        emoji: "",
        bg: "bg-orange-100"
    }

    products.push(newProduct)

    res.status(200).json({
        success: true,
        message: "Product created successfully",
        data: newProduct
    })
})

// PUT /api/products/:id — update product
router.put("/:id", (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id)

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: `Product with id ${req.params.id} not found`
        })
    }

    // merge existing product with updated fields
    products[index] = { ...products[index], ...req.body }

    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: products[index]
    })
})

// DELETE /api/products/:id — delete product
router.delete("/:id", (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id)

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: `Product with id ${req.params.id} not found`
        })
    }

    products.splice(index, 1)

    res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: products[index]
    })
})

module.exports = router
