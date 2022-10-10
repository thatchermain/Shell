let picture = document.querySelector(".hidden");

changeClass = () => {
  console.log("clicked");
  picture.classList.add("overlay");
  picture.classList.remove("hidden");
};

const wait = setTimeout(changeClass, 7700);
