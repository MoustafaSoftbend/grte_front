import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DashboardDrawer from "../Components/DashboardDrawer";
import GeolocalisationMap from "../Components/Map";
import Table from "../Components/Table";
import StatsBox from "../Components/StatsBox";
import { faChevronDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import loadGeoJSON from "../utils/geoJsonParser";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectDashState,
  setDashNavigationState,
  setPreviewDisplay,
  setLastActionTrigger,
} from "../Slices/DashNavigationSlice";

import Link from "next/link";
// const geojsonData = await loadGeoJSON();
// console.log(geojsonData);

const DashBoard = () => {
  const dash = useSelector(selectDashState);
  const dashElReference = dash.dashElReference;
  const previewDisplay = dash.previewDisplay;
  const lastActionTrigger = dash.lastActionTrigger;
  const dispatch = useDispatch();
  // console.log(dashElReference);

  const navigateToSection = (e) => {
    // setPageRef(e.currentTarget.id);
    // setPreview(false);

    if (e.target.tagName == "svg" || e.target.tagName == "path") {
      return;
    }
    console.log(`navigatd to ${e.target.id}`);
    dispatch(setDashNavigationState(e.currentTarget.id));
    dispatch(setPreviewDisplay(false));
    dispatch(setLastActionTrigger("globalDash"));
  };

  const displayElements = () => {
    const elements = document.querySelectorAll("section");

    elements.forEach((el) => {
      if (dashElReference && el.id != dashElReference) {
        console.log(el.id);
        el.style.display = "none";
      }
    });
  };

  useEffect(() => {
    displayElements();
  }, [dashElReference]);
  return (
    <div className="dash">
      <Navbar bg_status={false} />
      <div className="dash-body clr-primary">
        <DashboardDrawer />
        <div
          className={`dash-main relative ${previewDisplay ? "p-[0.5em]" : ""}`}
        >
          <div className="grid gap-[10px]">
            <section
              id="0"
              onClick={(e) => navigateToSection(e)}
              className={`geo-map dash-section ${
                dashElReference == 0 ? "h-[95vh] m-0" : "h-[300px] p-[2.5px]"
              }`}
            >
              <GeolocalisationMap />
            </section>
            <section
              id="1"
              onClick={(e) => navigateToSection(e)}
              className={`table-section dash-section dash-section ${
                dashElReference == 1 ? "h-[auto]" : "h-[300px] p-[2.5px]"
              }`}
            >
              <Table />
            </section>
            <section
              id="2"
              onClick={(e) => navigateToSection(e)}
              className={`stats-section dash-section dash-section ${
                dashElReference == 2 ? "h-[auto]" : "h-[auto] p-[2.5px]"
              }`}
            >
              <StatsBox />
            </section>
          </div>
          {true && (
            <div className="action-menu">
              <div className="task-menu ">
                <h1 className="action-menu-title text-lg">Actions</h1>
                <ul className="task-list">
                  <li className="task">
                    {" "}
                    <button className="task-button">
                      {" "}
                      Update Dashboard info
                    </button>{" "}
                  </li>
                  <li className="task">
                    {" "}
                    <button className="task-button">
                      {" "}
                      find project blocked
                    </button>{" "}
                  </li>
                  <li className="task">
                    {" "}
                    <button className="task-button">
                      {" "}
                      make an action plan to follow up
                    </button>{" "}
                  </li>
                  <li className="task">
                    {" "}
                    <button className="task-button">
                      {" "}
                      send data to database
                    </button>{" "}
                  </li>
                </ul>
              </div>

              <div className="task-menu ">
                <h1 className="action-menu-title text-lg">Messages</h1>
                <ul className="task-list">
                  <li className="task">
                    {" "}
                    <button className="task-button">
                      {" "}
                      Update Dashboard info
                    </button>{" "}
                  </li>
                  <li className="task">
                    {" "}
                    <button className="task-button">
                      {" "}
                      find project blocked
                    </button>{" "}
                  </li>
                  <li className="task">
                    {" "}
                    <button className="task-button">
                      {" "}
                      make an action plan to follow up
                    </button>{" "}
                  </li>
                  <li className="task">
                    {" "}
                    <button className="task-button">
                      {" "}
                      send data to database
                    </button>{" "}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
