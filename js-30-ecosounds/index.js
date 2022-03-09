const bird = document.querySelector(`[data-nav="bird"]`)
const solovei = document.querySelector(`[data-nav="solovei"]`)
const malinovka = document.querySelector(`[data-nav="malinovka"]`)
const javoronok = document.querySelector(`[data-nav="zhavoronok"]`)
const slavka = document.querySelector(`[data-nav="slavka"]`)
const vorobei = document.querySelector(`[data-nav="vorobei"]`)
const ivolga = document.querySelector(`[data-nav="ivolga"]`)
const drozd = document.querySelector(`[data-nav="drozd"]`)
const playBtn = document.querySelector('.play-button')
const main = document.querySelector('.main')
const audio = new Audio();

let isPlay = audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > audio.HAVE_CURRENT_DATA;


const birdArr = ['solovei', 'malinovka', 'javoronok', 'slavka', 'vorobei', 'ivolga']

birdArr.forEach(item => {
  function preloadBirdImages() {
      for(let i = 1; i <= 8; i++) {
        const img = new Image();
        img.src = `./assets/img/${item}.jpg`;
      }
    }
    preloadBirdImages();
})

birdArr.forEach(item => {
  function preloadAudio() {
    const aud = new Audio();
    aud.src = `./assets/audio/${item}.mp3`;      
    }
    preloadAudio();
})


// function changeImg (item){
//  main.style.background = `url(./assets/img/${item}.jpg)` 
// }

function audioImgSource (item) {  
playBtn.classList.add('pause')
audio.src = `./assets/audio/${item}.mp3`
audio.currentTime = 0;
audio.play()
main.style.background = `url(./assets/img/${item}.jpg)` 
}
  
solovei.addEventListener('click', () => {  
  audioImgSource('solovei') 
})

malinovka.addEventListener('click', () => {  
  audioImgSource('malinovka')   
})
drozd.addEventListener('click', () => {
  audioImgSource('drozd')   
})
javoronok.addEventListener('click', () => {  
  audioImgSource('javoronok')  
})

slavka.addEventListener('click', () => {  
  audioImgSource('slavka')  
})
vorobei.addEventListener('click', () => { 
  audioImgSource('vorobei')  
})
ivolga.addEventListener('click', () => { 
  audioImgSource('ivolga')     
})
bird.addEventListener('click', () => {  
  audioImgSource('forest')   
})


function playPauseAudio() {  
  audio.paused?  audio.play() :  audio.pause() 
}  

playBtn.addEventListener('click',  playPauseAudio)

playBtn.addEventListener('click', () => { 
    playBtn.classList.toggle('pause') })

const navItem = document.querySelectorAll('.nav-item')
const navList = document.querySelector('.nav-list')

navList.addEventListener('click', function(event) {
  const target = event.target
  navItem.forEach(item => {
    item.classList.remove('active')
  })
  target.classList.add('active')
})



