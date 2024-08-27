import { useState, useEffect } from "react";
import Map from "react-map-gl";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
// import { loadGeoJSON } from "../utils/geoJsonParser";

// import "mapbox-gl/dist/mapbox-gl.css";
import {
  lightingEffect,
  material,
  INITIAL_VIEW_STATE,
  colorRange,
} from "../utils/mapconfig";
import { faChevronDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { exitDahEl } from "../utils/exitButton";

import { useSelector, useDispatch } from "react-redux";
import {
  selectDashState,
  setDashNavigationState,
  setPreviewDisplay,
  setLastActionTrigger,
} from "../Slices/DashNavigationSlice";

// const geojsonData = loadGeoJSON("../utils/electric-network-algeria.geojson");
// console.log(geoJsonData);

const GeolocalisationMap = () => {
  const [geoJsonData, setGeojsonData] = useState({});
  const dispatch = useDispatch();
  const dash = useSelector(selectDashState);
  const { dashElReference, previewDisplay } = dash;

  const exitDahElement = (e) => {
    dispatch(setDashNavigationState(null));
    dispatch(setPreviewDisplay(true));
    dispatch(setLastActionTrigger("dashElement"));
    console.log(previewDisplay);
    document.querySelectorAll("section").forEach((e) => {
      e.style.display = "block";
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.electricitymap.org/v3/zones");
      const geojsonData = await response.json();
      // console.log(geojsonData);
      setGeojsonData(geoJsonData);
    };
    // fetchData();
  }, [dashElReference]);
  // const layers = [
  //   new GeoJsonLayer({
  //     id: "geojson",
  //     data,
  //     stroked: false,
  //     filled: false,
  //     lineWidthMinPixels: 0.5,
  //     parameters: {
  //       depthTest: false,
  //     },

  //     pickable: true,
  //     // onHover: setHoverInfo,

  //     // updateTriggers: {
  //     //   getLineColor: { year },
  //     //   getLineWidth: { year },
  //     // },

  //     transitions: {
  //       getLineColor: 1000,
  //       getLineWidth: 1000,
  //     },
  //   }),
  // ];
  // const layers = [
  //   new GeoJsonLayer({
  //     id: "geojson-layer",
  //     data: geoJsonData,
  //     getFillColor: [255, 0, 0, 128], // Red with 50% opacity
  //   }),
  // ];

  return (
    <div className={`section-wrapper h-fit ${previewDisplay ? "" : ""}`}>
      {previewDisplay ? (
        <>
          <div className="section-overlay">
            <h1 className="section-overlay-text text-title">
              Click Here to Navigate the grid
            </h1>
          </div>

          {/* <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
            <Map
              className=""
              controller={true}
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              mapStyle="mapbox://styles/moustafabendib/clotsjqrv00s101qyexbqg26o"
            ></Map>
          </DeckGL> */}
        </>
      ) : (
        <>
          <button
            type="button"
            className="dash-component-exit"
            href=""
            onClick={(e) => exitDahElement(e)}
          >
            <FontAwesomeIcon size="2xl" icon={faArrowLeft} />
          </button>

          {/* <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
            <Map
              className=""
              controller={true}
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
              mapStyle="mapbox://styles/moustafabendib/clotsjqrv00s101qyexbqg26o"
            ></Map>
          </DeckGL> */}
        </>
      )}
    </div>
  );
};

export default GeolocalisationMap;
