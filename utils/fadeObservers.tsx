export const fadeObserver = (className) => {
  const leftFaders = document.querySelectorAll(className);
  const leftObserverOptions = {
    // threshold: 1,
    // rootMArgin: "0 0 0 0",
  };
  const leftObserver = new IntersectionObserver((entities) => {
    entities.forEach((entity) => {
      // console.log(entity.target);
      if (!entity.isIntersecting) {
        return;
      }
      if (className === ".fade-bottom") {
        entity.target.style.transform = "translateY(0)";
      } else {
        entity.target.style.transform = "translateX(0)";
      }

      entity.target.style.opacity = 1;
    });
  }, leftObserverOptions);

  leftFaders.forEach((leftFader) => {
    leftObserver.observe(leftFader);
  });
};
