let picture = document.querySelector(".hidden");
console.log(picture);

// picture.addEventListener("click", () => {
//   console.log("clicked");
//   picture.classList.add("overlay");
//   picture.classList.remove("hidden");

// });

changeClass = () => {
  console.log("clicked");
  picture.classList.add("overlay");
  picture.classList.remove("hidden");

  // let i = 0;
  // let text =
  //   "Help bridge ideas across the world with your multilingual skills. Trive in an inclusive community and build a globally-connected career at Shell.";

  // const typing = () => {
  //   if (i < text.length) {
  //     document.querySelector(".description").textContent += text.charAt(i);
  //     i++;
  //     setTimeout(typing, 100);
  //   }
  // };
};

const wait = setTimeout(changeClass, 7500);

// const paragraph = document.querySelector(".description_content");
// const text = paragraph.textContent;
// console.log(text);

// const splitText = text.split("");
// console.log(splitText);

// for (let i = 0; i < splitText.length; i++) {
//   paragraph.innerHTML = "<span>" + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(reveal, 50);

// const reveal = () => {
//   const span = paragraph.querySelectorAll("span")[char];
//   span.classList.add("fade");
//   char++;
//   if (char === splitText.length) {
//     complete();
//     return;
//   }
// };

// const complete = () => {
//   clearInterval(timer);
//   timer = null;
// };
