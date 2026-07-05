const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

const seedData = [
    {
        title: "Hand-woven Woolen Shawl",
        region: "Kashmir",
        material: "Wool",
        size: "180×90 cm",
        price: 1200,
        moq: 50,
        ai: true,
        category: "Handloom",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&q=80"
    },
    {
        title: "Bamboo Table Runner",
        region: "Manipur",
        material: "Bamboo",
        size: "120×30 cm",
        price: 450,
        moq: 100,
        ai: true,
        category: "Eco Craft",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
    },
    {
        title: "Rosewood Jewellery Box",
        region: "Karnataka",
        material: "Rosewood",
        size: "20×15 cm",
        price: 2800,
        moq: 20,
        ai: false,
        category: "Woodcraft",
        image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400&q=80"
    },
    {
        title: "Bandhani Dupatta",
        region: "Gujarat",
        material: "Cotton Silk",
        size: "230 cm",
        price: 980,
        moq: 60,
        ai: true,
        category: "Handloom",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80"
    },
    {
        title: "Terracotta Decorative Pot",
        region: "West Bengal",
        material: "Clay",
        size: "25 cm",
        price: 320,
        moq: 200,
        ai: false,
        category: "Pottery",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80"
    },
    {
        title: "Pattachitra Painting",
        region: "Odisha",
        material: "Canvas",
        size: "40×30 cm",
        price: 1500,
        moq: 30,
        ai: true,
        category: "Folk Art",
        image: "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?w=400&q=80"
    }
]

router.post("/", async (req, res, next) => {
    try {
        await Product.deleteMany()
        const products = await Product.insertMany(seedData)
        res.status(201).json({
            success: true,
            message: `Seeded ${products.length} products`,
            data: products
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router