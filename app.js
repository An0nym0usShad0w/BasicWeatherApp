//Weather Temp, check pressure/wind
console.log('wow')
const weather= {};
// openweather Map id=0ebf0e29926cc939f557a936228e1129
const key = '0206fb57c695a64aa194768492b1386b';

var latitudeL=window.prompt('Enter Latitude: ');
var longitudeL=window.prompt('Enter Longitude');

var tempImage=document.getElementById('tempImage');
var tempNum=document.getElementById('tempNumber');
var tempDescription=document.getElementById('tempDescription');

var currentCity;
var currentTemp;
var currentWeatherDescription;
var currentID;

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api) 
    .then(result => result.json())
    .then(data=> {
        currentCity= data.name;
        currentTemp=data.main.temp;
        currentID= data.weather[0].id;
        currentWeatherDescription=(data.weather[0].description)
    })
    .then(
        updateWeather
    )
}

function setTempNum(temp_){
    tempNum.innerText=Math.floor(temp_-273) + " C";
}

function setImage(weatherID){
    console.log(currentID)
    if(weatherID>802){
        tempImage.src='icons/04d.png'
    }
    else if(weatherID==802){
        tempImage.src='icons/03d.png'
    }
    else if(weatherID==801){
        tempImage.src='icons/02d.png'
    }
    else if(weatherID==800){
        tempImage.src='icons/01d.png'
    }
    else if(weatherID>700 && weatherID<782){
        tempImage.src='icons/50d.png'
    }
    else if(weatherID>599&&weatherID<623){
        tempImage.src='icons/13d.png'
    }
    else if(weatherID>519&&weatherID<532){
        tempImage.src='icons/09d.png'
    }
    else if(weatherID==511){
        tempImage.src='icons/13d.png'
    }
    else if(weatherID>=500 && weatherID<=504){
        tempImage.src='icons/10d.png'
    }
    else if(weatherID>=300 && weatherID<=321){
        tempImage.src='icons/09d.png'
    }
    else if(weatherID>=200 && weatherID<=232){
        tempImage.src='icons/11d.png'
    }
    
}

function setDescription(weatherID){
    tempDescription.innerText=weatherID.toUpperCase()+"\n"+currentCity;
}

setTempNum(4)

setDescription('lol')

setImage();

getWeather(latitudeL,longitudeL)

function updateWeather(){
    setTempNum(currentTemp);
    setDescription(currentWeatherDescription);
    console.log(currentID)
    setImage(currentID);
}

