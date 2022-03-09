let url = 'https://type.fit/api/quotes'
const quoteText = document.querySelector('.quote-text')
const auth = document.querySelector('.author-text')
const changeBtn = document.querySelector('.change-quote')
const shareBtn = document.querySelector('.share-btn')


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
function showData (data) {
    let indx = Math.floor(Math.random()*data.length);
    let quote=data[indx].text
    let people = data[indx].author
    if(people == null) {
        people = "Anonymous"
    }
    quoteText.innerHTML=  ` "${quote}" `
    auth.innerHTML="~ "+ people
   
      }
     showData(data)        
  }
  
 
  
  window.addEventListener('load', () => {
    getData()
    changeBtn.addEventListener('click', () => {         
    getData()     
    newColor()
    changeImg()})
    
    } )


/* choice lang start */ 
const bel = document.querySelector('.lang-be')
const eng = document.querySelector('.lang-en')
eng.classList.add('active-lang')
 eng.addEventListener('click', () => {
  url = 'https://type.fit/api/quotes'
  getData()
  changeBtn.innerHTML='New quote'
  shareBtn.innerHTML = 'Share VK'
  eng.classList.add('active-lang')
  bel.classList.remove('active-lang') 
 })

 bel.addEventListener('click', () => {
  url = 'belarusian_quotes.json'
  getData()
  changeBtn.innerHTML='Новая цытата'
  shareBtn.innerHTML = 'Падзялiцца VK' 
  eng.classList.remove('active-lang')
  bel.classList.add('active-lang')
 })
/* choice lang end */ 


/* changeColor start*/ 
const colorArr = ['#ac2d2d', '#dbb10e', '#a1b017', '#44d70a', '#274b18', '#16652b', '#b77a0a', '#bd361d', '#bd6f1d',
'#b1bd1d', '#127660', '#122876', '#531098', '#8b1098', '#981053', '#981053', '#801098', '#983510', '#988910'  ]

const newColor = function changeColor() {
const colorEl = colorArr[Math.floor(Math.random() * colorArr.length)];
document.body.style.backgroundColor = colorEl
changeBtn.style.color = colorEl
shareBtn.style.color = colorEl
return colorEl
};

/* changeColor end*/ 

/* changeImg start*/ 
const newImg = document.querySelector('.change-img')

function changeImg() {
    let rand = Math.floor(Math.random()*15 + 1)
  return newImg.src = `./assets/img/${rand}.jpg`
}

function preloadImages() {
    for(let i = 1; i <= 15; i++) {
      const img = new Image();
      img.src = `./assets/img/${i}.jpg`;
    }
  }
  preloadImages();


/* changeImg end */ 

