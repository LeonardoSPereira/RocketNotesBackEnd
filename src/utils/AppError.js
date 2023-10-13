class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400 /*400 = Bad request*/) {
        this.message = message;
        this.statusCode = statusCode;
        
    } 
}

module.exports = AppError;