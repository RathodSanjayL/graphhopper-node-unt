import { Router } from "express";
import { getRoutes } from "../cotrollers/graphhopper.controller.js";
import { routeApiParamValidator } from "../validators/graphhopper.js";
import { latLongMiddleware } from "../middlewares/latlongMiddleware.js";

const rootRouter = Router();

rootRouter.get("/routes", routeApiParamValidator, latLongMiddleware, getRoutes);

export { rootRouter };
