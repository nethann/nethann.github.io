let title = document.querySelector('.welcome');

const fetchDate = () => {

    let fetchDate = new Date();
    let getHour = fetchDate.getHours();

    var message; 
    message = getHour >= 12 ? title.innerHTML = 'Good Evening..' : 'Good Morning..'
}
fetchDate();