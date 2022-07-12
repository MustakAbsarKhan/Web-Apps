window.addEventListener('load',()=>{
    let searchBox = document.querySelector('.searchBox');
    let button = document.querySelector('.searchBoxID');
    let moviePoster = document.querySelector('.movieposterImage');
    let movieTitle = document.querySelector('.movieTitle');
    let yearofRelease = document.querySelector('.yearofRelease');
    let genre = document.querySelector('.genre');
    let actors = document.querySelector('.actors');
    let director = document.querySelector('.director');
    let plot = document.querySelector('.plot');
    let award = document.querySelector('.award');
    
    //creating random movie name list
    let randomMovies = ["The Great Gatsby", "Moana", "Forrest Gump", "Saving Private Ryan","The Shawshank Redemption","The Lord of the Rings: The Return of the King","Pulp Fiction","Fight Club","The Silence of the Lambs","Interstellar","Minions: The Rise Of Gru","Vivo","The Angry Birds Movie 2","Despicable Me","Dragon Ball Super: Super Hero"]
    let myrandomMovie = randomMovies[Math.floor(Math.random() * randomMovies.length)]

    //Defining the input seperately by using function to have default input "The Great Gatsby"
    const apiinput= (input)=>{
        let params = new URLSearchParams({
            t:input,
            apikey:`91e92c35`
        })
        let api = `https://www.omdbapi.com/?${params}`;

        const apiCall = ()=>{
            //fetching the api orelse showing the error
            fetch(api).then((response)=>{
                    return response.json();
            }).then((data)=>{
                const{Poster,Title,Released,Genre,Actors,Director,Plot,Awards} = data;
                console.log(data);
    
                //assigning the data to variable
                movieTitle.textContent = Title;
                yearofRelease.textContent = Released;
                genre.textContent = Genre;
                actors.textContent = Actors;
                director.textContent = Director;
                plot.textContent = Plot;
                award.textContent = Awards;
                moviePoster.src = Poster; 

                //catching the undefined error
                if(Title===undefined){
                    window.alert("Please Enter a Valid Movie Name");
                    apiinput(myrandomMovie);
                }
            })
        }
        apiCall()
    }
    //Displaying Default Result
    apiinput(myrandomMovie);

    //Displays if the button is pressed
    button.addEventListener('click',()=>{
        if(searchBox.value==""){
            window.alert("Please Enter a Movie Name")
            apiinput(myrandomMovie);
        }else{
            apiinput(searchBox.value);
        }
    })
})
    