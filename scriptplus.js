const imageFilenames = [
"curvy19.jpg",
"curvy20.jpg",
"curvy21.jpg",
"curvy22.jpg",
"curvy23.jpg",
"curvy24.jpg",
"curvy25.jpg",
"curvy26.jpg",
"curvy27.jpg",
"curvy28.jpg",
"curvy29.jpg",
"curvy30.jpg",
"curvy31.jpg",
"curvy32.jpg",
"curvy33.jpg",
"curvy34.jpg",
"curvy35.jpg",
"fat36.jpg",
"fat37.jpg",
"fat38.jpg",
"fat39.jpg",
"fat40.jpg",
"fat41.jpg",
"fat42.jpg",
"fat43.jpg",
"fat44.jpg",
"fat45.jpg",
"fat46.jpg",
"fat47.jpg",
"fat48.jpg",
"fat49.jpg",
"fat50.jpg",
"fat51.jpg",
"fat52.jpg",
"fat53.jpg",
"fat54.jpg",
"fat55.jpg",
"fat56.jpg",
"fat57.jpg",
"fat58.jpg",
"fat59.jpg",
"fat60.jpg",
"plussize1.jpg",
"plussize2.jpg",
"plussize3.jpg",
"plussize4.jpg",
"plussize5.jpg",
"plussize6.jpg",
"plussize7.jpg",
"plussize8.jpg",
"plussize9.jpg",
"plussize10.jpg",
"plussize11.jpg",
"plussize12.jpg",
"plussize13.jpg",
"plussize14.jpg",
"plussize15.jpg",
"plussize16.jpg",
"plussize17.jpg",
"plussize18.jpg",
"plussize19.jpg",
"plussize20.jpg",
"plussize21.jpg",
"plussize22.jpg",
"plussize23.jpg",
"plussize24.jpg",
"plussize25.jpg",
"plussize26.jpg",
"plussize27.jpg",
"plussize28.jpg",
"plussize29.jpg",
"plussize30.jpg",
"plussize31.jpg",
"plussize32.jpg",
"plussize33.jpg",
"plussize34.jpg",
"plussize35.jpg",
"plussize36.jpg",
"plussize37.jpg",
"plussize38.jpg",
"plussize39.jpg",
"plussize40.jpg",
"plussize41.jpg",
"plussize42.jpg",
"plussize43.jpg",
"plussize44.jpg",
"plussize45.jpg",
"plussize46.jpg",
"plussize47.jpg",
"plussize48.jpg",
"plussize49.jpg",
"plussize50.jpg",
"lingerie51.jpg",
"lingerie52.jpg"
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

  // Start fade-out & blur
  imgElement.style.opacity = 0;
  imgElement.style.filter = "blur(10px)";

  // Delay a bit to allow transition, then change image
  setTimeout(() => {
    imgElement.src = "images/" + imageFilenames[nextIndex];
  }, 500);
}

// When image is loaded, fade it in and remove blur
document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.getElementById("slideshow-image");

  imgElement.addEventListener("load", () => {
    document.getElementById("spinner").style.display = "none";
    imgElement.style.opacity = 1;
    imgElement.style.filter = "blur(0px)";
  });

  updateImage();
  setInterval(updateImage, 6000); // 6 seconds
});

// Disable right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const shareBtn = document.getElementById("share-button");

shareBtn.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: document.title,
        url: window.location.href
      });
    } catch (err) {
      console.log("Share canceled or failed", err);
    }
  } else {
    alert("Sharing not supported on this device.");
  }
});
