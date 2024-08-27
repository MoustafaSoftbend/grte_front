export const exitDahEl = (e) => {
  const exit = document.querySelectorAll(".dash-component-exit");
  // e.target.style.display = "none";
  console.log(
    e.target.parentElement.parentElement.parentElement.parentElement.id,
  );
  const id =
    e.target.parentElement.parentElement.parentElement.parentElement.id;
  // e.target.parentElement.parentElement.style.height = "300px";
  document.getElementById(id).style.height = "300px";
  const sections = document.querySelectorAll(".dash .dash-main section");

  sections.forEach((s, i) => {
    s.style.display = "block";
    s.style.height = "300px";
    console.log(s);
  });
};
