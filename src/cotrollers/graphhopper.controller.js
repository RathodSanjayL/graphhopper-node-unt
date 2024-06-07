import { graphHopperService } from "../services/graphHopper.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { RESPONSE_STATUS } from "../utils/responseStatus.js";

const getRoutes = asyncHandler(async (req, res) => {
  const { from, to } = req.data;
  console.log({ from, to });

  const routeData = await graphHopperService.getRoutes(from, to);

  return apiResponse(res, RESPONSE_STATUS.SUCCESS, {
    message: routeData,
  });
});

export { getRoutes };
