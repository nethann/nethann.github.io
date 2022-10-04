//MAKE SURE TO COMMENT PROPERLY

var slideIndex = 1;

//YMCA BAGS DISTRIBUTION
ymcaBag(slideIndex);
//ATLANTA CHURCH OF CHRIST MEDIA MINISTRY
MediaPics(slideIndex)
//DREW CHARTER SCHOOL KINGERGARDEN WALK
KinderWalk(slideIndex)


//YMCA BAGS DISTRIBUTION
function YMCA(n) {
    ymcaBag(slideIndex += n);
}

//ATLANTA CHURCH OF CHRIST MEDIA MINISTRY
function MediaMinistry(n) {
    MediaPics(slideIndex += n);
}

//DREW CHARTER SCHOOL KINGERGARDEN WALK
function KingerGarden(n) {
    KinderWalk(slideIndex += n);
}


//YMCA BAGS DISTRIBUTION
function ymcaBag(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


//ATLANTA CHURCH OF CHRIST MEDIA MINISTRY
function MediaPics(n) {
    var i;
    var x = document.getElementsByClassName("Media");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}


//DREW CHARTER SCHOOL KINGERGARDEN WALK
function KinderWalk(n) {
    var i;
    var x = document.getElementsByClassName("Kinder");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}
  