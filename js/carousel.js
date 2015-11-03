//CAROUSEL

$(document).ready(function() {
 
  $("#carousel--main").owlCarousel({
 
      autoPlay: 5000, //Set AutoPlay to 3 seconds
 
      items : 4,
      pagination: false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

//CAROUSEL TESTIMONIALs

$(document).ready(function() {
 
  $("#carousel__testimonials").owlCarousel({
 
      autoPlay: 7000, //Set AutoPlay to 3 seconds
      singleItem: true,
      autoHeight: true
      
  });
 
});

//CAROUSEL CLIENTS

$(document).ready(function() {
 
  $("#carousel--clients").owlCarousel({
 
      autoPlay: 5000, //Set AutoPlay to 3 seconds
 
      items : 4,
      pagination: false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});