import {
  faChevronDown,
  faArrowLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import {
  selectDashState,
  setDashNavigationState,
  setPreviewDisplay,
  setLastActionTrigger,
} from "../Slices/DashNavigationSlice";

import ExampleWithProviders from "./MaterialUiTable";

const Table = () => {
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
  return (
    <div className="section-wrapper">
      {previewDisplay ? (
        <>
          <div className="section-overlay opacity-5">
            <h1 className="section-overlay-text text-title">
              <Link className="flex flex-row w-fit absolute bottom-0" href="">
                <FontAwesomeIcon icon={faChevronDown} />
              </Link>
            </h1>
          </div>
          <div className="table-container overflow-hidden w-fit">
            <ExampleWithProviders />
          </div>
          <div className="show-more-table w-fit"></div>
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
          <div className="table-heading">
            <h1 className="table-title text-title p-2">Ouvrages</h1>
          </div>
          {/* 
          <div className="table-container block text-lg font-bold">
            <table className="dash-table m-3 p-2">
              <tr>
                <th>Id</th>
                <th>ouvrage</th>
                <th className="removable">type</th>
                <th>Consistance</th>
                <th className="removable">GC</th>
                <th className="removable">MTG</th>
                <th>avancement</th>
                <th>avancement</th>
                <th>avancement</th>
                <th>avancement</th>
                <th>avancement</th>
                <th>avancement</th>
                <th>avancement</th>
                <th>avancement</th>
                <th>avancement</th>
                <th>avancement</th>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>1</td>
                <td>tipaza</td>
                <td className="removable">post</td>
                <td>80KVA</td>
                <td className="removable">90%</td>
                <td className="removable">10%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
                <td>60%</td>
              </tr>
            </table>
            <div className="show-more-table w-fit"></div>
          </div> */}
          <div className="table-container">
            <ExampleWithProviders />
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
