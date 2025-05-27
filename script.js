const images = [
  'images/photo (1).jpg',
  'images/photo (2).jpg',
  'images/photo (3).jpg',
  'images/photo (4).jpg',
  'images/photo (5).jpg',
  'images/photo (6).jpg',
  'images/photo (7).jpg',
  'images/photo (8).jpg',
  'images/photo (9).jpg',
  'images/photo (10).jpg',
  'images/photo (11).jpg',
  'images/photo (12).jpg',
  'images/photo (13).jpg',
  'images/photo (14).jpg',
  'images/photo (15).jpg',
  'images/photo (16).jpg',
  'images/photo (17).jpg',
  'images/photo (18).jpg',
  'images/photo (19).jpg',
  'images/photo (20).jpg',
  'images/photo (21).jpg',
  'images/photo (22).jpg',
  'images/photo (23).jpg',
  'images/photo (24).jpg',
  'images/photo (25).jpg',
  'images/photo (26).jpg',
  'images/photo (27).jpg',
  'images/photo (28).jpg',
  'images/photo (29).jpg',
  'images/photo (30).jpg',
  'images/photo (31).jpg',
  'images/photo (32).jpg',
  'images/photo (33).jpg',
  'images/photo (34).jpg',
  'images/photo (35).jpg',
  'images/photo (36).jpg',
  'images/photo (37).jpg',
  'images/photo (38).jpg',
  'images/photo (39).jpg',
  'images/photo (40).jpg',
  'images/photo (41).jpg',
  'images/photo (42).jpg',
  'images/photo (43).jpg',
  'images/photo (44).jpg',
  'images/photo (45).jpg',
  'images/photo (46).jpg',
  'images/photo (47).jpg',
  'images/photo (48).jpg',
  'images/photo (49).jpg',
  'images/photo (50).jpg',
  'images/photo (51).jpg',
  'images/photo (52).jpg',
  'images/photo (53).jpg',
  'images/photo (54).jpg',
  'images/photo (55).jpg',
  'images/photo (56).jpg',
  'images/photo (57).jpg',
  'images/photo (58).jpg',
  'images/photo (59).jpg',
  'images/photo (60).jpg',
  'images/photo (61).jpg',
  'images/photo (62).jpg',
  'images/photo (63).jpg',
  'images/photo (64).jpg',
  'images/photo (65).jpg',
  'images/photo (66).jpg',
  'images/photo (67).jpg',
  'images/photo (68).jpg',
  'images/photo (69).jpg',
  'images/photo (70).jpg',
  'images/photo (71).jpg',
  'images/photo (72).jpg',
  'images/photo (73).jpg',
  'images/photo (74).jpg',
  'images/photo (75).jpg',
  'images/photo (76).jpg',
  'images/photo (77).jpg',
  'images/photo (78).jpg',
  'images/photo (79).jpg',
  'images/photo (80).jpg',
  'images/photo (81).jpg',
  'images/photo (82).jpg',
  'images/photo (83).jpg',
  'images/photo (84).jpg',
  'images/photo (85).jpg',
  'images/photo (86).jpg',
  'images/photo (87).jpg',
  'images/photo (88).jpg',
  'images/photo (89).jpg',
  'images/photo (90).jpg',
  'images/photo (91).jpg',
  'images/photo (92).jpg',
  'images/photo (93).jpg',
  'images/photo (94).jpg',
  'images/photo (95).jpg',
  'images/photo (96).jpg',
  'images/photo (97).jpg',
  'images/photo (98).jpg',
  'images/photo (99).jpg',
  'images/photo (100).jpg',
];

function randomImage() {
  const img = document.getElementById('slideshow');
  const index = Math.floor(Math.random() * images.length);
  img.src = images[index];
}

randomImage();
setInterval(randomImage, 5000);

function showNextImage() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * images.length);
  } while (nextIndex === currentIndex);

  currentIndex = nextIndex;

  const imgElement = document.getElementById("slideshow");
  imgElement.src = "images/" + images[currentIndex];
}

setInterval(showNextImage, intervalTime);
window.onload = showNextImage;
