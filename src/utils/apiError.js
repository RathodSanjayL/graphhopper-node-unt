class ApiError extends Error {
    statusCode;

    constructor(statusCode, message) {
        // Calling constructor of Error class
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

export { ApiError };
