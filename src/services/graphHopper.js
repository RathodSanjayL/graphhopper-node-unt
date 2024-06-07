import axios from "axios";

class GraphHopperService {
    
    async getRoutes(...data) {
      const GRAPHHOPPER_URL = process.env.GRAPHHOPPER_URL;
    try {
      return await axios.post(`${GRAPHHOPPER_URL}/route`, {
        points: data,
        snap_preventions: ["motorway", "ferry", "tunnel"],
        details: ["road_class", "surface"],
        profile: "car",
        locale: "en",
        instructions: true,
        calc_points: true,
        points_encoded: false,
      });
    } catch (error) {
      return error;
    }
  }
}

const graphHopperService = new GraphHopperService();

export { graphHopperService };
