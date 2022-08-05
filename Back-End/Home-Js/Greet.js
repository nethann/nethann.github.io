// going to display the greeting by the time

let greetingTxt = document.getElementById('Title');


var CurrentDate = new Date();
var Hours = CurrentDate.getHours();

if (Hours < 12){
    greetingTxt.innerHTML = 'Good Morning,'
}

else if (Hours >= 12 && Hours <= 17){
    greetingTxt.innerHTML = 'Good Afternoon,'
}

else if(Hours >= 17 && Hours <= 24){
    greetingTxt.innerHTML = 'Good Evening,'
}