console.log("Welcome to BeatBoulevard");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let Songs = [
  {
    songName: "1000 Blunts",
    filePath: "songs/1.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "Ashes Of Luxuy",
    filePath: "songs/2.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "Escape From BABYLON",
    filePath: "songs/3.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "Eulogy",
    filePath: "songs/4.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "F#cking Your Culture",
    filePath: "songs/5.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "Genesis",
    filePath: "songs/6.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "In Constant Sorrow",
    filePath: "songs/7.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "Matte Black",
    filePath: "songs/8.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "No Matter Which Direction I'm Going In, I Never Chase These Ho#s",
    filePath: "songs/9.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "Resistance Is Useless",
    filePath: "songs/10.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "THE_EVIL_THAT_MEN_DO",
    filePath: "songs/11.mp3",
    coverPath: "covers/cover.jpeg",
  },
  {
    songName: "Unlucky Me",
    filePath: "songs/12.mp3",
    coverPath: "covers/cover.jpeg",
  },

];


songItems.forEach((element, i)=> {

    element.getElementsByTagName('img')[0].src= Songs[i].coverPath;
    element.getElementsByClassName('SongName')[0].innerText =  Songs[i].songName;
})

// audioElement.play();

// Handle play/pause clicks

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {

  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value= progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;
})



// makeAllplays

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = Songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = Songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = Songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})