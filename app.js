const apiKey="52666734f5565351c119f712fab58146";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".Weather").style.display="none";
    }else{

    }
    var data=await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
    if(data.weather[0].main=="clouds"){
        weatherIcon.src="images/images/images/clouds.png"

    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/images/images/clouds.png"

    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/images/images/clear.png"

    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/images/images/rain.png"

    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/images/images/drizzle.png"

    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/images/images/mist.png"


    }
    document.querySelector(".Weather").style.display="block";
    document.querySelector(".error").style.display="none";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
