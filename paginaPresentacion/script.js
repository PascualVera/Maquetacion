let aboutButton = document.getElementById("about");
let lessButton = document.getElementById("less");
let title = document.getElementById("title_container");
aboutButton.addEventListener("click", () => {
  title.setAttribute(
    "style",
    `
    transform: translatey(-50%);
    opacity:-0;
    overflow-x:hidden;
    
  `
  );
});

lessButton.addEventListener("click", () => {
  title.setAttribute(
    "style",
    `
  transform: translatey(0%);
  opacity:1;
  overflow-x:hidden;
`
  );
});
