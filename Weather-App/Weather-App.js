window.addEventListener('load',()=> {
    let locationTimezone = document.querySelector('.location-timezone');
    let weatherIcon = document.querySelector('.icon');
    let degreeSection = document.querySelector('.degree-section')
    let temperatureData = document.querySelector('.temp');
    let temperatureSpan = document.querySelector('.degree-section span')
    let weatherStatus = document.querySelector('.temp-Update');
    let stateInfo = document.querySelector('.state');
    let countryInfo = document.querySelector('.country'); 

    fetch(`https://ipinfo.io/json?d6a0865f4c921e`).then((location)=>{
        return location.json();
    }).then((locationdata)=>{
        console.log(locationdata);
        const {region}=locationdata;//getting the region from this api

    let params = new URLSearchParams({
        access_key : '432202d6e70f4b468d34867d3cefdc73',
        query : region,
        units: 'm'
    })
    fetch(`http://api.weatherstack.com/current?${params}`).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    
    const {temperature, weather_descriptions, weather_icons}= data.current;
    const {localtime,country,name}= data.location;

    //Set DOM Elements from API
    locationTimezone.textContent = "Local Time: "+localtime;
    temperatureData.textContent = temperature;
    weatherStatus.textContent = weather_descriptions;
    document.getElementById('icon').src= weather_icons;
    stateInfo.textContent = name;
    countryInfo.textContent = country;
    
     //convert celsius to farenheit
    let farenheitdata = (temperature *9.0/5.0)+32.0;
    //change celsius to farenheit
    degreeSection.addEventListener('click', ()=>{
        if(temperatureSpan.textContent === "°C"){
            temperatureSpan.textContent = "°F";
            temperatureData.textContent = farenheitdata;
        }else{
            temperatureSpan.textContent = "°C"
            temperatureData.textContent = temperature;
        }
    })
    })
    })
})