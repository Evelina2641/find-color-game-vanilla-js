let startGameBtn = document.querySelector("#start-game-btn");
let boxes = document.querySelectorAll(".box");
let mainColorBlock = document.querySelector(".game-board__main-color");
let scoreAmount = document.querySelector("#score-amount");
let timeLeftOutput = document.querySelector("#time-amount");
let footer = document.getElementById('footer')
let userName = document.getElementById('name')
let mainResults = document.querySelector('.results')
let submit = document.getElementById('submit')

let mainColor;
let lastMainColor;

let score = 0;

// Functions
function setColor() {
    let randomNumbArr = [];

    while(randomNumbArr.length < colors.length){
        let randomNumb = Math.floor(Math.random() * colors.length);
        if(randomNumbArr.indexOf(randomNumb) === -1) randomNumbArr.push(randomNumb);
    }
    
    let i = 0;
    
    Array.from(boxes).forEach(box => {
        box.style.backgroundColor = colors[randomNumbArr[i]];
        i++;
    });
}
function startGame() {
    setColor();
    startGameBtn.disabled = true;
    score = 0;
    timeUp = false;

    let index = Math.floor(Math.random() * colors.length);
    mainColor = colors[index];
    mainColorBlock.style.backgroundColor = mainColor;
    
    let timeLeft = time / 1000;

    setTimeout(() => {
        timeUp = true;
        startGameBtn.disabled = false;
    }, time);

    setInterval(() => {
        if(timeLeft > 0) {
            timeLeftOutput.innerText = `${--timeLeft} seconds`;
        }
        getBestScore();
    }, 1000);
}
function catchColor(e) {
    if(!timeUp) {
        let currentBoxStyle = getComputedStyle(e.target);
        let mainColorStyle = getComputedStyle(mainColorBlock);
        
        if(currentBoxStyle.backgroundColor === mainColorStyle.backgroundColor) {
            score++
            scoreAmount.innerText = score;
            lastMainColor = mainColorStyle.backgroundColor;
            changeColor();
        }
    } 
}
function changeColor() {
    if(!timeUp) {
        let index = Math.floor(Math.random() * colors.length);
        let boxesColors = [];
        
        boxes.forEach(box => {
            let style = getComputedStyle(box);
            boxesColors.push(style.backgroundColor);
        });
        
        mainColor = boxesColors[index];

        if(mainColor === lastMainColor) {
            changeColor();
        } else {
            mainColorBlock.style.backgroundColor = mainColor;
        }
    }
}
function getBestScore() {
    let savedScore = window.localStorage.getItem(localStorageItem);
    if(savedScore == null) {
        window.localStorage.setItem(localStorageItem, score)
    } else if (score > savedScore) {
        window.localStorage.setItem(localStorageItem, score)
    }
}

document.addEventListener("DOMContentLoaded", setColor);
startGameBtn.addEventListener("click", startGame);
boxes.forEach(box => box.addEventListener("click", catchColor))
// submit.addEventListener('submit', showUser())
// showUser(gameUsersList, mainResults);

// Datos autamiskas nustatymas
let date = new Date().getFullYear()
footer.innerHTML = `<p>&copy; All rights reserved | ${date}</p>`