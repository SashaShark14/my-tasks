const area = document.querySelector('.area')
const cell = document.querySelectorAll('.cell')
const curPlayer = document.querySelector('.curPlayer')
const reset = document.querySelector('.reset-btn')
const mesText = document.querySelector('.message-text')
const mesContainer = document.querySelector('.message-container')
const gameBtn = document.querySelector('.game')
const messageImg = document.querySelector('.mes-img')
const countText = document.querySelector('.count-text')



function buildArea() {
    const newStyle =  cell.forEach((item, index) => {
          let styleCell = ''
          if(index < 3) {
              styleCell += `border-bottom: 3px solid #fff;`
          }
          if(index % 3 === 0) {
              styleCell += `border-right: 3px solid #fff;`
          }
          if(index % 3 === 2) {
              styleCell += `border-left: 3px solid #fff;`
          }
          if(index > 5) {
              styleCell += `border-top: 3px solid #fff;`
          }
          item.style = styleCell        
      })
  return newStyle
  }
  buildArea()

let player = 'x'
const winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], 
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
let dr = 0;
let winX = 0;
let winO = 0;
let moves = []




cell.forEach(item => {
    item.addEventListener('click', cellClick, false)
})


const audio = new Audio()
let count = 0; 

function showCount() {    
localStorage.setItem('count', JSON.stringify(count))
localStorage.getItem(JSON.parse(count))
countText.innerHTML = `After ${count} moves`
}

const resultX = document.querySelector('.rez-X')
const resultO = document.querySelector('.rez-O')
const resultD = document.querySelector('.rez-D')
const resultMoves = document.querySelector('.result-moves')
const resultCont = document.querySelector('.result-container')
let countX = document.querySelector('.sX')
let countO = document.querySelector('.sO')
let countD = document.querySelector('.sD')
let countS = document.querySelector('.sS')

function handleReset() {   
    countX.innerHTML = 0
    countO.innerHTML = 0
    countD.innerHTML = 0    
    countS.innerHTML = 0 
    localStorage.clear()
    location.reload()
}

function showResult() {
    localStorage.setItem('winnerO', JSON.stringify(winO))
    localStorage.setItem('winnerX', JSON.stringify(winX))
    localStorage.setItem('draw', JSON.stringify(dr)) 
    let resX = localStorage.getItem('winnerX')
    let resO = localStorage.getItem('winnerO')
    let resD = localStorage.getItem('draw') 
    countX.innerHTML = resX
    countO.innerHTML = resO
    countD.innerHTML = resD

    
    
    let totalCount = dr + winX + winO 
    if(totalCount == 10) {        
        resultCont.classList.add('vis')
        resultX.innerHTML = `'X' won ${resX} times`
        resultO.innerHTML = `'O' won ${resO} times`
        resultD.innerHTML = `Draw was ${resD} times`
        dr = 0
        winX = 0
        winO = 0        
    } 
    localStorage.setItem('total', JSON.stringify(totalCount))
    let totalGet = localStorage.getItem('total')
    countS.innerHTML = totalGet 
}

function cellClick() {    
    let data = [] 
     
    if(!this.innerHTML) {
        this.innerHTML = player
      count++        
    } else {
        alert('Cell is filled') 
     }  

    for(let i in cell) {
    if(cell[i].innerHTML == player) {
         data.push(parseInt(cell[i].getAttribute('pos')))
     }
    }    

    if(checkWin(data)) {       
        if(player == 'x') {
            winX++
            moves.push(count)            
        } else {
            winO++
            moves.push(count)              
        }       
         mesContainer.classList.add('visible')
         messageImg.src= './assets/img/win.png'
         mesText.innerHTML= `'${player}' is winner!`.toUpperCase()
        showCount()                 
        audio.src = './assets/audio/win.mp3'
        audio.play()
        cell.forEach(item => item.classList.add('point'))      
        restart()
        showResult()
     
    } else {
        let draw = true
        for(let i in cell) {
            if(cell[i].innerHTML == '') draw = false
        }
        if(draw) {      
        dr++ 
        moves.push(count)                    
        mesContainer.classList.add('visible')
        mesText.innerHTML= `Draw!`
        messageImg.src= './assets/img/draw.png'
        showCount()
        audio.src = './assets/audio/draw.mp3'
        audio.play()
        cell.forEach(item =>  item.classList.add('point'))
        restart() 
        showResult()            
        }
    }

    player = player == 'x'? 'o': 'x'
    let curPl = player.toUpperCase()
    curPlayer.innerHTML = `Turn: ${curPl}` 
    countMoves ()   
}


gameBtn.addEventListener('click', () =>  {
    count = 0
    player = 'x'
    curPlayer.innerHTML = 'Turn X'
     mesContainer.classList.remove('visible')
     cell.forEach(item => {
        item.classList.remove('point')
        })
})
   

function checkWin(data) {
    for (let i in winIndex) {
        let win = true
        for(let j in winIndex[i]) {
            let id = winIndex[i][j]
            let ind = data.indexOf(id)
            if(ind == -1) {
                win = false
            }
        }    
        if (win) return true
    }
    return false
}

function restart() {
cell.forEach(item => item.innerHTML = '') 
}

reset.addEventListener('click', () => {
cell.forEach(item => item.innerHTML = '') 
handleReset()})

function countMoves () {
    if (moves.length > 10) {
     moves.shift()   
    } 
    localStorage.setItem('totalMoves', JSON.stringify(moves))
    let newMoves = JSON.parse(localStorage.getItem('totalMoves'))
    const allMoves = newMoves.reduce((sum, item) => sum += item, 0)
    resultMoves.innerHTML = `You made ${allMoves} moves`
    localStorage.setItem('allMoves', allMoves)  
    
}  

const closeBtn = document.querySelector('.close-result')
closeBtn.addEventListener('click', () => { resultCont.classList.remove('vis') } )

// window.addEventListener('load', showResult())
// window.addEventListener('beforeunload', showResult())