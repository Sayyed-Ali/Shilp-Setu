const express = require("express")
const router = express.Router()
const Inquiry = require("../models/Inquiry")

// GET /api/inquiries — get all inquiries
router.get("/", async (req, res, next) => {
    try {
        const inquiries = await Inquiry.find().populate("productId", "title region price")

        res.status(200).json({
            success: true,
            count: inquiries.length,
            data: inquiries
        })
    } catch (error) {
        next(error)
    }
})

// POST /api/inquiries — submit new inquiry
router.post("/", async (req, res, next) => {
    try {
        const inquiry = await Inquiry.create(req.body)

        res.status(201).json({
            success: true,
            message: "Inquiry submitted successfully",
            data: inquiry
        })
    } catch (error) {
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

module.exports = router


