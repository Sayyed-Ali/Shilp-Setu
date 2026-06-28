const express = require("express")
const router = express.Router()
const { inquiries } = require("../data/store")

// GET /api/inquiries — get all inquiries
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: inquiries.length,
        data: inquiries
    })
})

// POST /api/inquiries — submit new inquiry
router.post("/", (req, res) => {
    const { buyerName, company, productId, quantity, contactEmail, message } = req.body

    if (!buyerName || !productId || !contactEmail) {
        return res.status(400).json({
            success: false,
            message: "buyerName, productId and contactEmail are required"
        })
    }

    const newInquiry = {
        id: String(Date.now()),
        buyerName,
        company: company || "",
        productId,
        quantity: Number(quantity) || 1,
        contactEmail,
        message: message || "",
        status: "New",
        createdAt: new Date().toISOString()
    }

    inquiries.push(newInquiry);

    res.status(200).json({
        success: true,
        message: "Inquiry submitted successfully",
        data: newInquiry
    })
})

module.exports = router


