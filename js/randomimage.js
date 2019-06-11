$(document).ready(function(){
  function getRandomImage() {
    var images = ['images/AC01.jpg', 'images/AC02.jpg', 'images/AC03.jpg', 'images/AC04.jpg', 'images/AC05.jpg', 'images/AC06.jpg', ];
    var image = images[Math.floor(Math.random()*images.length)];

    return image;
  }

  function displayRandomImage() {
    var htmlImage = document.getElementById("randomImage");
    htmlImage.src = getRandomImage();
  }

  displayRandomImage();
});
