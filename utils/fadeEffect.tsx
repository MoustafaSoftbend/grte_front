export const fadeEffect = (
  denominator,
  // el_position,
  // el_scroll_position,
  // ref_percentage,
  percentage = 0,
) => {
  // console.log(percentage);
  // if (ratio < 1 && ratio > 0) {
  //   percentage = ratio;
  // } else if (ratio > 1) {
  //   percentage = 1;
  // } else {
  //   percentage = 0;
  // }
  const element = document.querySelectorAll(denominator);
  // console.log(el_position, el_scroll_position);

  if (percentage) {
    // console.log(percentage);
    // Array.from(element).forEach(function (node) {
    // if (percentage > 0.057) {
    //   element[0].style.opacity = 1;
    //   console.log(element[0]);
    // } else if (percentage > 0.12) {
    //   element[1].style.opacity = 1;
    //   console.log(element[1]);
    // } else if (percentage > 0.34) {
    //   element[2].style.opacity = 1;
    // } else if (percentage > 0.41) {
    //   element[3].style.opacity = 1;
    // } else if (percentage > 0.7) {
    //   element[4].style.opacity = 1;
    // } else if (percentage > 0.75) {
    //   element[5].style.opacity = 1;
    // } else {
    //   Array.from(element).forEach((node) => {
    //     node.style.opacity = "0";
    //   });
    // }
    // element.forEach((element, i) => {
    //   if (percentage > 0.057 && i === 0) {
    //     element.style.strokeDasharray = `${percentage * 100}%`;
    //     element.style.strokeDashoffset = `${percentage * 100}%`;
    //     console.log(element);
    //   } else if (percentage > 0.12 && i === 1) {
    //     element.style.opacity = 1;
    //   } else if (percentage > 0.34 && i === 2) {
    //     element.style.opacity = 1;
    //   } else if (percentage > 0.41 && i === 3) {
    //     element.style.opacity = 1;
    //   } else if (percentage > 0.7 && i === 4) {
    //     element.style.opacity = 1;
    //   } else if (percentage > 0.75 && i === 5) {
    //     element.style.opacity = 1;
    //   }
    // });
    element.forEach((el, i) => {
      const pathLength = el.getTotalLength();
      el.style.strokeDasharray = pathLength;
      el.style.strokeDashoffset = pathLength;

      let drawPath = pathLength * percentage;
      el.style.strokeDashoffset = pathLength - drawPath;

      if (percentage > 0.28 && i === 0) {
        el.style.strokeDashoffset = pathLength - drawPath;
      } else if (percentage > 0.35 && i === 1) {
        el.style.strokeDashoffset = pathLength - drawPath;
      } else if (percentage > 0.55 && i === 2) {
        el.style.strokeDashoffset = pathLength - drawPath;
      } else if (percentage > 0.62 && i === 3) {
        el.style.strokeDashoffset = pathLength - drawPath;
      } else if (percentage > 0.62 && i === 4) {
        el.style.strokeDashoffset = pathLength - drawPath;
      } else if (percentage > 0.762 && i === 5) {
        el.style.strokeDashoffset = pathLength - drawPath;
      }
    });
  }
};
