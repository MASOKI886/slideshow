const imageFilenames = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg"
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

// Disable right-click on the entire page
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Start the slideshow on page load
window.onload = function () {
  updateImage();
  setInterval(updateImage, 5000); // 5 seconds
};
