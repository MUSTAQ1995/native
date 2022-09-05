import { decode } from "@mapbox/polyline";

const GetDirection = async (startLoc, destinaionLoc) => {
  try{
    const KEY = "AIzaSyCoKwXffHll_SJJPh1-Sj-SEMN_tSTMsfc"
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinaionLoc}&key=${KEY}`
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.point);
    console.log(points);
    let coords = ponits.map((ponit, index) => {
      return {
        latitude: ponits[0],
        longitude: points[1]
      };
    });
    return coords;
  } catch (error){
    return error;
  };
}

export default GetDirection;