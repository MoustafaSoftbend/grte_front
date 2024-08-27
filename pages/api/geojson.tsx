import { readFileSync } from "fs";
import geojsonParser from "geojson-parser";

export default (req, res) => {
  const filePath = "path/to/your/geojson/file";
  const geoJsonData = readFileSync(
    "../../utils/electric-network-algeria.geojson",
    "utf-8",
  );
  const parsedData = geojsonParser.parse(geoJsonData);

  res.status(200).json({ data: parsedData });
};
