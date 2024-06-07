import { query, validationResult } from "express-validator";
import { ApiError } from "../utils/apiError.js";
import { RESPONSE_STATUS } from "../utils/responseStatus.js";

const validationErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors
      .array()
      .map((error) => error.msg)
      .join(", ");

    throw new ApiError(RESPONSE_STATUS.BAD_REQUEST, errors);
  }

  next();
};

const routeApiParamValidator = [
  query("from").trim().notEmpty().withMessage().isLatLong(),
  query("to").trim().notEmpty().withMessage().isLatLong(),
  (req, res, next) => {
    validationErrorHandler(req, res, next);
  },
];

export { routeApiParamValidator };
