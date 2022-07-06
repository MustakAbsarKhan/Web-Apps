window.addEventListener('load', ()=>{
    let button = document.querySelector('.button');
    let inputValue = document.querySelector('.inputValue');
    let weatherIcon = document.querySelector('.weatherIcon');
    let namedata = document.querySelector('.name');
    let disc = document.querySelector('.disc')
    let tempData = document.querySelector('.temp')
    let humidityData = document.querySelector('.humidity')

    let lon;
    let lat;
    let api;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
        let params = new URLSearchParams({
            lon : position.coords.longitude,
            lat : position.coords.latitude,
            units : 'metric',
            appid : "748e7dba41d49066f4324aaa1e277333",
        });
        
        //without user's click on the button
        api = `https://api.openweathermap.org/data/2.5/weather?${params}`
                apiCall(api);
        //if user clicks on the button
        button.addEventListener('click',function(){
            if(inputValue.value==""){
                api = `https://api.openweathermap.org/data/2.5/weather?${params}`
                apiCall(api);
            }else{
                api = `https://api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&units=metric&appid=748e7dba41d49066f4324aaa1e277333`
                apiCall(api);
            }
        })
            
        //Weather Data Fetching Function
        function apiCall(api){
            fetch(api).then((response)=>{
            return response.json();
        }).then((data)=>{
            const {name} = data;
            const {temp,humidity} = data.main;
            const {id} = data.weather[0];
            console.log(data)

            namedata.textContent = name;
            disc.textContent = data['weather'][0]['description'];
            tempData.textContent = 'Temp: '+temp+'°C';
            humidityData.textContent = 'Humidity: '+humidity+"%";

            //convert celsius to farenheit
            let farenheitdata = (temp *9.0/5.0)+32.0;
            //change celsius to farenheit
            tempData.addEventListener('click', ()=>{
                if(tempData.textContent.includes("°C")){
                    tempData.textContent ='Temp: '+farenheitdata.toFixed(2)+"°F";
                }else{
                    tempData.textContent = 'Temp: '+temp+'°C';
                }
            })

            //Assiging img to each id
            if(id<300 && id>=200){
                //thunderstorm
                weatherIcon.src = "http://openweathermap.org/img/wn/11d@2x.png" 
            }else if(id<600 && id>=300){
                //drizzle//rain
                weatherIcon.src = "http://openweathermap.org/img/wn/10d@2x.png" 
            }else if(id<700 && id>=600){
                //snow
                weatherIcon.src = "http://openweathermap.org/img/wn/13d@2x.png"
            }else if(id<800 && id>=700){
                //atmosphere
                weatherIcon.src = "http://openweathermap.org/img/wn/50d@2x.png"
            }else if(id<801 && id==800){
                //clear
                weatherIcon.src = "http://openweathermap.org/img/wn/01d@2x.png"
            }else if(id<805 && id>800){
                //clouds
                weatherIcon.src = "http://openweathermap.org/img/wn/04d@2x.png"
            }

        })
        .catch(err=>alert("Wrong City Name!"))
        }
        });
    }else{
        console.log("Please Reload and Allow Location Access!")
    }

})
