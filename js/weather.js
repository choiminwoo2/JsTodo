const API_KEY = 'df1a6b6262cba701ed7ee31f6ae84387';


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);    
    fetch(url).then(response => response.json()).then(data => {
        const weather =document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
        city.innerText= data.name;
        weather.innerHTML = `<img src ='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'><br> ${data.main.temp}도`;
        
    });
}
function onGeoErr(){
    alert("위치를 찾을 수 없으므로 날씨를 제공할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);


//api.openweathermap.org/data/2.5/weather?let={lat}&lon={}&appid=
