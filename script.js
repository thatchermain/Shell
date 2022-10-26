let picture = document.querySelector(".hidden");
let clip = document.querySelector(".clip");
let video = document.querySelector(".video");

changeClass = () => {
  console.log("clicked");
  picture.classList.add("overlay");
  picture.classList.remove("hidden");
  clip.classList.add("gone");
  clip.classList.remove("clip");
  video.classList.add("video-bg");
};

const wait = setTimeout(changeClass, 7680);
