import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
import AreaChart from "../Components/AreaChart";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDashState,
  setDashNavigationState,
  setPreviewDisplay,
  setLastActionTrigger,
} from "../Slices/DashNavigationSlice";

import { faChevronDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const StatsBox = () => {
  const dispatch = useDispatch();
  const dash = useSelector(selectDashState);
  const { dashElReference, previewDisplay } = dash;

  const [visual, setVisual] = useState("BarChart");

  const exitDahElement = (e) => {
    dispatch(setDashNavigationState(null));
    dispatch(setPreviewDisplay(true));
    dispatch(setLastActionTrigger("dashElement"));
    console.log(previewDisplay);
    document.querySelectorAll("section").forEach((e) => {
      e.style.display = "block";
    });
  };

  const selectVisual = (e) => {};

  return (
    <div className={`section-wrapper h-fit ${previewDisplay ? "" : ""}`}>
      {previewDisplay ? (
        <>
          <div className="section-overlay opacity-[0.1]"></div>
          <div className="dash-stats-wrapper">
            <BarChart />
            <PieChart />
            <AreaChart />
          </div>
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

          <div className="stats-section-info">
            <h1 className="dash-stats-title text-title">Company Stats</h1>
          </div>

          <div className="actual-visualization bkg-black">
            <BarChart />
          </div>
          <div className="dash-stats-wrapper bkg-black rounded-corner m-3">
            <div className="wrapper-x-slider">
              <div
                id="BarChart"
                onClick={(e) => selectVisual(e)}
                className="x-elements"
              >
                <BarChart />
              </div>
              <div
                id="PieChart"
                onClick={(e) => selectVisual(e)}
                className="x-elements"
              >
                <PieChart />
              </div>
              <div
                id="AreaChart"
                onClick={(e) => selectVisual(e)}
                className="x-elements"
              >
                <AreaChart />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StatsBox;
