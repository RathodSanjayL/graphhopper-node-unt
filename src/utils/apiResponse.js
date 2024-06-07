function apiResponse(res, statusCode, data) {
    return res.status(statusCode).json(data);
}
export { apiResponse };
