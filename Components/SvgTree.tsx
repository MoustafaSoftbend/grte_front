import { useEffect, useRef, useState } from "react";
import { fadeEffect } from "../utils/fadeEffect";
import { calcPercentage, svgAnimatiom } from "../utils/calcPercentage";

const SvgTree = ({
  scrollPosition,
  windowWidth,
  firstScrollPoint,
  secondScrollPoint,
  thirdScrollPoint,
  position_zero,
  position_one,
  position_two,
}) => {
  const path = useRef([]);
  const circles = useRef([]);
  const path_l = useRef([]);
  const circles_l = useRef([]);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const ratio = (position_one + 0.4 * thirdScrollPoint) / thirdScrollPoint;
    if (ratio <= 1 && ratio >= 0) {
      setPercentage(ratio);
    } else if (ratio > 1) {
      setPercentage(1);
    } else {
      setPercentage(0);
    }

    // const element = document.querySelectorAll(".svg-tree svg rect");
    // element.forEach((el) => {
    //   el.style.height = `${percentage * 100}%`;
    // });
    svgAnimatiom();
    // calcPercentage();
    // fadeEffect(".svg-tree svg path", percentage);
  }, [scrollPosition]);
  return (
    <div className="svg-tree">
      <svg
        width="100%"
        height="1400"
        viewBox="0 0 257 1855"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <rect
          x="125.904"
          y="20.2009"
          width="6.8808"
          height="1826.71"
          fill="#18EDE5"
          stroke="#18EDE5"
        />
        <path
          d="M129.344 127.543C174.377 210.672 232.545 223.965 256 220.221"
          stroke="#18EDE5"
          stroke-width="10"
          // ref={(e) => (path.current[0] = e)}
        />
        <path
          d="M129.344 652.153C174.377 735.282 232.545 748.575 256 744.83"
          stroke="#18EDE5"
          stroke-width="10"
          // ref={(e) => (path.current[1] = e)}
        />
        <path
          d="M129.344 1349.76C174.377 1432.89 232.545 1446.18 256 1442.44"
          stroke="#18EDE5"
          stroke-width="10"
          // ref={(e) => (path.current[2] = e)}
        />
        <ellipse
          // ref={(e) => (circles.current[0] = e)}
          cx="129.5"
          cy="1839"
          rx="12.5"
          ry="16"
          fill="#18EDE5"
        />
        <path
          d="M127.656 247.743C82.6225 330.872 24.4548 344.165 1.00001 340.42"
          stroke="#18EDE5"
          stroke-width="10"
          // ref={(e) => (path.current[3] = e)}
        />
        <path
          d="M129.344 793.697C84.3112 876.825 26.1435 890.119 2.68873 886.374"
          stroke="#18EDE5"
          stroke-width="10"
          // ref={(e) => (path.current[4] = e)}
        />
        <path
          d="M129.344 1443C84.3112 1526.13 26.1435 1539.42 2.68873 1535.68"
          stroke="#18EDE5"
          stroke-width="10"
          //ref={(e) => (path.current[5] = e)}
        />
        <ellipse
          ref={(e) => (circles.current[1] = e)}
          cx="129.5"
          cy="15.5"
          rx="12.5"
          ry="15.5"
          fill="#18EDE5"
        />
      </svg>

      <svg
        width="100%"
        height="1900"
        viewBox="0 0 464 1923"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="226.891"
          y="34.8802"
          width="13.2781"
          height="1863.55"
          fill="#18EDE5"
          stroke="#18EDE5"
        />
        <path
          ref={(e) => (path_l.current[0] = e)}
          d="M233.53 144.397C315.119 229.201 420.505 242.762 463 238.942"
          stroke="#18EDE5"
          stroke-width="10"
        />
        <path
          ref={(e) => (path_l.current[1] = e)}
          d="M233.53 679.582C315.119 764.387 420.505 777.948 463 774.128"
          stroke="#18EDE5"
          stroke-width="10"
        />
        <path
          ref={(e) => (path_l.current[2] = e)}
          d="M233.53 1391.25C315.119 1476.06 420.505 1489.62 463 1485.8"
          stroke="#18EDE5"
          stroke-width="10"
        />
        <ellipse
          ref={(e) => (circles_l.current[0] = e)}
          cx="234.04"
          cy="1898.36"
          rx="22.947"
          ry="24.6392"
          fill="#18EDE5"
        />
        <path
          ref={(e) => (path_l.current[3] = e)}
          d="M230.47 267.02C148.881 351.824 43.4945 365.385 1.00002 361.565"
          stroke="#18EDE5"
          stroke-width="10"
        />
        <path
          ref={(e) => (path_l.current[4] = e)}
          d="M233.53 823.979C151.94 908.784 46.5541 922.345 4.05959 918.525"
          stroke="#18EDE5"
          stroke-width="10"
        />
        <path
          ref={(e) => (path_l.current[5] = e)}
          d="M233.53 1486.37C151.94 1571.18 46.5541 1584.74 4.05959 1580.92"
          stroke="#18EDE5"
          stroke-width="10"
        />
        <ellipse
          ref={(e) => (circles_l.current[1] = e)}
          cx="233.53"
          cy="22.9201"
          rx="22.4371"
          ry="22.9201"
          fill="#18EDE5"
        />
      </svg>
    </div>
  );
};

export default SvgTree;
