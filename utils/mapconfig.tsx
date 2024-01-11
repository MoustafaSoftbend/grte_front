import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core";
import { scaleLinear, scaleThreshold } from "d3-scale";

export const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
});

export const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-0.144528, 49.739968, 80000],
});

export const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-3.807751, 54.104682, 8000],
});

export const lightingEffect = new LightingEffect({
  ambientLight,
  pointLight1,
  pointLight2,
});

export const material = {
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [51, 51, 51],
};

export const INITIAL_VIEW_STATE = {
  latitude: 30, // Latitude for the center of Algeria
  longitude: 1.6596, // Longitude for the center of Algeria
  zoom: 3.2,
  minZoom: 0,
  maxZoom: 25,
  // pitch: 40.5,
  // bearing: -27,
};

// export const INITIAL_VIEW_STATE = {
//   longitude: 19.134378,
//   latitude: 51.9189,
//   zoom: 6.8,
//   minZoom: 5,
//   maxZoom: 15,
//   pitch: 40.5,
//   bearing: -27,
// };

export const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
];

export const COLOR_SCALE = scaleThreshold()
  .domain([0, 4, 8, 12, 20, 32, 52, 84, 136, 220])
  .range([
    [26, 152, 80],
    [102, 189, 99],
    [166, 217, 106],
    [217, 239, 139],
    [255, 255, 191],
    [254, 224, 139],
    [253, 174, 97],
    [244, 109, 67],
    [215, 48, 39],
    [168, 0, 0],
  ]);
