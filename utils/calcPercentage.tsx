import { fadeEffect } from "./fadeEffect";
export const calcPercentage = () => {
  // const sections = document.querySelectorAll(el_class);
  // let previousRatio;
  // const options = {
  //   // rootMArgin: "300px 0 0 0",
  //   threshold: 0,
  // };
  // const observer = new IntersectionObserver((entries) => {
  //   let ratio;
  //   entries.forEach((e) => {
  //     // console.log(e);
  //     if (!e.isIntersecting) {
  //       return;
  //     }
  //     if (
  //       e.isIntersecting &&
  //       e.intersectionRatio >= previousRatio &&
  //       e.intersectionRatio <= 0.5
  //     ) {
  //       ratio = e.intersectionRatio * 2;
  //     }
  //     previousRatio = e.intersectionRatio;
  //     console.log(ratio, previousRatio);
  //   });
  // }, options);
  // sections.forEach((section) => {
  //   observer.observe(section);
  // });
  // const element = document.querySelector(".card-section");
  // let pos = element.scrollTop;
  // let calcHeight = element.scrollHeight - element.clientHeight;
  // let scrollValue = pos / calcHeight;
  // console.log(scrollValue);
  // element.onscroll = calcPercentage;
};

export const svgAnimatiom = () => {
  const rectangle = document.querySelectorAll(".svg-tree svg");
  const rectObserverOptions = {
    rootMargin: "1400px 0px -100px 0px",
    // threshold: 1,
  };
  const rectObserver = new IntersectionObserver((e) => {
    e.forEach((e) => {
      if (!e.isIntersecting && e.intersectionRatio >= 1) {
        e.target.children[0].style.height = 0;
        return;
      }
      e.target.children[0].style.height = `${e.intersectionRatio * 100}%`;
      // if (e.intersectionRatio >= 1) {
      //   rectObserver.unobserve(rectangle);
      // }
    });
  }, rectObserverOptions);
  rectangle.forEach((rectangle) => {
    rectObserver.observe(rectangle);
  });

  const paths = document.querySelectorAll(".svg-tree svg path");
  const pathObserverOptions = {
    rootMargin: "0px 0px -200px 0px",
  };
  const pathObserver = new IntersectionObserver((e) => {
    e.forEach((e) => {
      // console.log(!e.isIntersecting);

      if (!e.isIntersecting) {
        return;
      }
      e.target.style.opacity = 1;

      // console.log(e);
    });
  }, pathObserverOptions);

  paths.forEach((path) => {
    pathObserver.observe(path);
  });

  const circles = document.querySelectorAll(".svg-tree svg ellipse");
  const circleObserverOptions = {
    rootMargin: "0px 0px -200px 0px",
  };
  const circleObserver = new IntersectionObserver((e) => {
    e.forEach((e) => {
      // console.log(!e.isIntersecting);

      if (!e.isIntersecting) {
        return;
      }
      e.target.style.opacity = 1;

      // console.log(e);
    });
  }, circleObserverOptions);

  circles.forEach((circle) => {
    circleObserver.observe(circle);
  });
};
