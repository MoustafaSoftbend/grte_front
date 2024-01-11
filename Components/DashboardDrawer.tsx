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
      <div className="drawers">
        <ul className="dash-drawer-icon-items">
          <li className="dash-drawer-item">
            <Link href="">
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </li>
          <li className="dash-drawer-item">
            <Link href="">
              <FontAwesomeIcon icon={faCarBattery} />
            </Link>
          </li>
          <li className="dash-drawer-item">
            <Link href="">
              <FontAwesomeIcon icon={faTowerCell} />
            </Link>
          </li>
          <li className="dash-drawer-item">
            <Link href="">
              <FontAwesomeIcon icon={faDiagramProject} />
            </Link>
          </li>
          <li className="dash-drawer-item">
            <Link href="">
              <FontAwesomeIcon icon={faScaleBalanced} />
            </Link>
          </li>
        </ul>

        <ul className="dash-drawer-items">
          <li className="dash-drawer-item dash-selected">
            <Link href="/">Home</Link>
          </li>
          <li className="dash-drawer-item">
            <Link href="/">Postes</Link>
          </li>
          <li className="dash-drawer-item">
            <Link href="/">Lignes</Link>
          </li>
          <li className="dash-drawer-item">
            <Link href="/">Plan de developement</Link>
          </li>
          <li className="dash-drawer-item">
            <Link href="/">Finance</Link>
          </li>
        </ul>
      </div>
      <div className="profile-settings">
        <img
          src="https://th.bing.com/th/id/R.2a42d7b274bb96d8cc0976555277bea8?rik=78P3LjqrXSkA5Q&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fcool-profile-icons-69.png&ehk=wSrAuMrucfij0k%2bWLPOJBjzoYz1%2bz4pIUyFZ44rWOzg%3d&risl=&pid=ImgRaw&r=0"
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
