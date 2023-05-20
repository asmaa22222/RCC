// Set the initial slide index
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  // Hide all the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment the slide index
  slideIndex++;

  // If the slide index is greater than the number of slides, reset it to 1
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex-1].style.display = "block";

  // Call the function again after 5 seconds (5000 milliseconds)
  setTimeout(showSlides, 5000);
}


function closePopup() {
  var overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
}


/*...........MAP.....................................*/

function initMap() {
  // إنشاء متغير لتخزين إحداثيات الموقع
  var location = {lat: 37.7749, lng: -122.4194};

  // إنشاء خريطة جديدة
  var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 8
  });

  // إنشاء علامة على الخريطة
  var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'موقع المؤسسة'
  });
}

