import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Drawer = () => {
  const HandleCloseMenu = (): void => {
    const drawer = document.querySelector(".drawer") as HTMLElement | null;
    drawer.style.transform = "translateX(100%)";
  };
  return (
    <div className="drawer clr-primary ml-2">
      <button
        onClick={HandleCloseMenu}
        className="close-link text-title"
        href=""
      >
        <FontAwesomeIcon className="close-button" icon={faXmark} />
      </button>
      <ul className="drawer-table">
        <li className="drawer-item">
          {" "}
          <Link href=""></Link>Drawer Item
        </li>
        <li className="drawer-item">
          {" "}
          <Link href=""></Link>Drawer Item
        </li>
        <li className="drawer-item">
          {" "}
          <Link href=""></Link>Drawer Item
        </li>
        <li className="drawer-item">
          {" "}
          <Link href=""></Link>Drawer Item
        </li>
        <li className="drawer-item">
          {" "}
          <Link href=""></Link>Drawer Item
        </li>
        <li className="drawer-item">
          {" "}
          <Link href=""></Link>Drawer Item
        </li>
        <li className="drawer-item">
          {" "}
          <Link href=""></Link>Drawer Item
        </li>
        <li className="drawer-item">
          {" "}
          <Link href=""></Link>Drawer Item
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
