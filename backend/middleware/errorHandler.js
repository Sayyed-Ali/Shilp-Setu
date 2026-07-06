// global error handling middleware
// Express calls this when api call next(error) from any route

function errorHandler(err, req, res, next) {
    console.error(err.stack)
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal server error"
    })
}

module.exports = errorHandler