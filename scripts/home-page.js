let firsLevelResult = document.querySelector('.first-level-result');
let secondLevelResult = document.querySelector('.second-level-result');
let thirdLevelResult = document.querySelector('.third-level-result');
let savedEasyScore = window.localStorage.getItem('easy-score');
let savedMediumScore = window.localStorage.getItem('medium-score');
let savedHardScore = window.localStorage.getItem('hard-score');
if(savedEasyScore != null) {
    firsLevelResult.innerText = `FIRST LEVEL: ${savedEasyScore}`
}
if(savedMediumScore != null) {
    secondLevelResult.innerText = `SECOND LEVEL: ${savedMediumScore}`
}
if(savedHardScore != null) {
    thirdLevelResult.innerText = `THIRD LEVEL: ${savedHardScore}`
}