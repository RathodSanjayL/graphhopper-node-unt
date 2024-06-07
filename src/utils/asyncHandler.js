function asyncHandler(
    handler,
) {
    return (req, res, next) => {
        Promise.resolve(handler(req, res, next)).catch((error) => {
            console.error(error.message);
            next(error);
        });
    };
}

export { asyncHandler };
