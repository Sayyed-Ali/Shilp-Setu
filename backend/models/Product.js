const mongoose = require("mongoose")

// Product schema — represents a handcraft product listed by an artisan collective

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Product title is required"],
            trim: true
        },
        region: {
            type: String,
            required: [true, "Region is required"],
            trim: true
        },
        material: {
            type: String,
            required: [true, "Material is required"],
            trim: true
        },
        size: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [1, "Price must be greater than 0"]
        },
        moq: {
            type: Number,
            default: 1
        },
        category: {
            type: String,
            default: "Other"
        },
        ai: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true // automatically adds createdAt and updatedAt fields
    }
)

module.exports = mongoose.model("Product", productSchema)