const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const errorHandler = require("./middleware/errorHandler")

// load env variables from .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT

//middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json()) // parse incoming JSON request bodies


app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

//routes
app.use("/api/products", require("./routes/products"))
app.use("/api/inquiries", require("./routes/inquiries"))

// health check endpoint — useful to test if server is alive
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Shilp Setu API is running"
    })
})

// 404 handler — catches any route that didn't match above
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    })
})

// global error handler
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})