const mongoose = require("mongoose")

// Inquiry schema — represents a bulk purchase inquiry submitted by a buyer

const inquirySchema = new mongoose.Schema(
    {
        buyerName: {
            type: String,
            required: [true, "Buyer name is required"],
            trim: true
        },
        company: {
            type: String,
            default: ""
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: [true, "Product ID is required"]
        },
        quantity: {
            type: Number,
            default: 1,
            min: [1, "Quantity must be at least 1"]
        },
        contactEmail: {
            type: String,
            required: [true, "Contact email is required"],
            trim: true,
            lowercase: true
        },
        message: {
            type: String,
            default: ""
        },
        status: {
            type: String,
            enum: ["New", "Contacted", "Confirmed"],
            default: "New"
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Inquiry", inquirySchema)