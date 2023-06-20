
let nameInHtml = document.querySelector('.username');
let score = document.querySelector('.score');
let button = document.querySelector('.button');

let scoreValue = {
    score: 0,
}


let userNameinp = prompt('what is your name nigga');

let userName = userNameinp;

nameInHtml.textContent +=  userNameinp + " !"; 

function myFunction(){
    scoreValue.score++
    
    score.innerHTML = scoreValue.score;
    
}


button.addEventListener("click", myFunction);









