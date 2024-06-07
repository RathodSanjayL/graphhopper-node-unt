import { ApiError } from '../utils/apiError.js';
import { responseMessage } from '../utils/responseMessage.js';

const errorHandler = (
    error,
    req,
    res,
    _next,
) => {
    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || 500;
        const message = error.message || responseMessage.OTHER.SERVER_ERROR;

        error = new ApiError(statusCode, message);
    }

    return res.status(error.statusCode).json({ message: error.message });
};

export { errorHandler };
