var input = document.getElementById("enterSong");
var songContainer = document.getElementById("songList");


// songs



var drunkDazed = ["drunk dazed", "Drunk Dazed", "drunkdazed"];

var fever = ["fever", "Fever"];

var agustD = ["agustd", "Agustd", "Agust D", "agust D", "agust d"];

var futurePerfect = ["future perfect", "Future Perfect"];

var unforgiven = ["unforgiven", "Unforgiven"];

var listSongs = [drunkDazed, fever, agustD, futurePerfect, unforgiven];

// AUDIOS
var fever1 = new Audio("feverSlow.mp3");

var unforgiven1 = new Audio("unforgiven.mp3");

var agustD1 = new Audio("Agust D.mp3");

var future = new Audio("future.mp3");

var drunk = new Audio("Drunk-Dazed.mp3");

function addSong() {
    
    if (input.value === "") {
        alert("Wähle einen Song aus")
    }
    else if(document.querySelectorAll("li.task").length >= 1) {

        
        return; }
   
/*    let song = document.createElement("li");
    song.classList.add("task");

    song.innerHTML = input.value;
    songContainer.appendChild(song); */


    for (var i = 0; i < listSongs.length; i++) {
        if (listSongs[i].includes(input.value)) {



            let song = document.createElement("li");
            song.classList.add("task");
    
            song.innerHTML = input.value;
            songContainer.appendChild(song); 
        }

    }

    
   


}

let isPlaying = false;
var currentSong = null;

songContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("song");
        
        var cover = e.target.querySelector("li::before");
        if(fever.includes(input.value)){
      //  if (fever.includes(e.target.innerHTML.toLowerCase())) {
            if(isPlaying === false) {

                
              //  cover.style.backgroundImage = "url(https://i.scdn.co/image/ab67616d0000b273714e56679ab196354e2e443e)";
                fever1.play();
                
                isPlaying = true;
            }
            else if (isPlaying === true) {
                fever1.pause();
                isPlaying = false;
            }
        } 

        if(unforgiven.includes(input.value)){

            if(isPlaying === false) {

                unforgiven1.play();
                isPlaying = true;
            }
            else if (isPlaying === true) {
                unforgiven1.pause();
                isPlaying = false;
            }
        } 

        if(agustD.includes(input.value)){
            
            if(isPlaying === false) {

                
                agustD1.play();
                isPlaying = true;
            }
            else if (isPlaying === true) {
                agustD1.pause();
                isPlaying = false;
            }
        } 

        if(futurePerfect.includes(input.value)){

            if(isPlaying === false) {
                future.play();
                isPlaying = true;
            }
            else if (isPlaying === true) {
                future.pause();
                isPlaying = false;
            }
        } 

        if(drunkDazed.includes(input.value)){

            if(isPlaying === false) {
                drunk.play();
                isPlaying = true;
            }
            else if (isPlaying === true) {
                drunk.pause();
                isPlaying = false;
            }
        }  


        
        
        
    }
},false  ); 


input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        addSong();
    }
})