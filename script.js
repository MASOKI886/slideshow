const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg'
];

function randomImage() {
  const img = document.getElementById('slideshow');
  const index = Math.floor(Math.random() * images.length);
  img.src = images[index];
}

randomImage();
setInterval(randomImage, 5000);
