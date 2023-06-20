
let nameInHtml = document.querySelector('.username');
let score = document.querySelector('.score');
let button = document.querySelector('.button');
let rank = document.querySelector('.level');

let scoreValue = {
    score: 0,
}



let userNameinp = prompt('what is your name nigga');

let userName = userNameinp;

nameInHtml.textContent +=  userNameinp + " !"; 

function myFunction(){
    scoreValue.score++
    
    score.innerHTML = scoreValue.score;
    

    if(scoreValue.score == 10){
        rank.innerHTML = "timmy"
    } else if (scoreValue.score == 30){
        rank.innerHTML = "drunkato"
    } else if (scoreValue.score == 50){
        rank.innerHTML = "jelqer"
    } else if (scoreValue.score == 70){
        rank.innerHTML = "reshalla"
    } else if (scoreValue.score == 80){
        rank.innerHTML = "retard nigga penis"
    } else if (scoreValue.score == 101){
        rank.innerHTML = "wagner"
        alert('omg you won wow')
        scoreValue.score = 0;
    }


}



button.addEventListener("click", myFunction);









