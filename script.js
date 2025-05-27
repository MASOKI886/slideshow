const imageFilenames = [
"photo (1).jpg",
"photo (2).jpg",
"photo (3).jpg",
];

let currentIndex = -1;

function getNextIndex() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * imageFilenames.length);
  } while (nextIndex === currentIndex);
  currentIndex = nextIndex;
  return nextIndex;
}

function updateImage() {
  const imgElement = document.getElementById("slideshow-image");
  const nextIndex = getNextIndex();
  imgElement.src = "images/" + imageFilenames[nextIndex];
}

// Disable right-click on entire page
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Start slideshow
window.onload = function () {
  updateImage();
  setInterval(updateImage, 7000); // Change 7000 to another value (ms) if needed
};
