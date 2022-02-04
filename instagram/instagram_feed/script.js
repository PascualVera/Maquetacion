let searchbar = document.getElementById("searchbar");

searchbar.addEventListener("focus", () => {
  searchbar.innerHTML = "";
});
