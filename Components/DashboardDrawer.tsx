import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCarBattery,
  faTowerCell,
  faDiagramProject,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";

const DasboardDrawer = () => {
  return (
    <div className="dashboard-drawer">
      <ul className="dash-drawer-items">
        <li className="dash-drawer-item">
          <FontAwesomeIcon icon={faHouse} />
          <Link href="/">Home</Link>
        </li>
        <li className="dash-drawer-item">
          <FontAwesomeIcon icon={faCarBattery} />
          <Link href="/">Postes</Link>
        </li>
        <li className="dash-drawer-item">
          <FontAwesomeIcon icon={faTowerCell} />
          <Link href="/">Lignes</Link>
        </li>
        <li className="dash-drawer-item">
          <FontAwesomeIcon icon={faDiagramProject} />
          <Link href="/">Plan de developement</Link>
        </li>
        <li className="dash-drawer-item">
          <FontAwesomeIcon icon={faScaleBalanced} />
          <Link href="/">Finance</Link>
        </li>
      </ul>
      <div className="profile-settings">
        <img
          src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=170667a&w=0&k=20&c=m-F9Doa2ecNYEEjeplkFCmZBlc5tm1pl1F7cBCh9ZzM="
          alt=""
          className="profile-img"
        />
        <h1 className="profile-name">Brad Berny</h1>
        <p className="profile-email">Brad.berny@gmail.com</p>
      </div>
    </div>
  );
};

export default DasboardDrawer;
