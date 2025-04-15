'use strict';

/*Implementing The Game Logic*/
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const displayMessege=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    if(guess<1 || guess>20){
        displayMessege("⛔Number should be between 1 and 20");
        return;
    }

    //when player guess no number
    if(!guess){
        displayMessege('No Number😒');

        //when player wins
    }else if(guess===secretNumber){
        displayMessege('Correct Number🎇');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';

        //Implementing Highscores
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

        //when player guess is too high
    }else if(guess>secretNumber){
        if(score>0){
           displayMessege('Too High🤦‍♂️');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            displayMessege('Game Over🥴');
            document.querySelector('.score').textContent=0;
        }

        //when player guess is too low
    }else if(guess<secretNumber){
        if(score>0){
            displayMessege('Too Low🤨');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            displayMessege('Game Over🥴');
            document.querySelector('.score').textContent=0;
        }
    }
});
//Coding Challenge#4
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    displayMessege('Start Guessing🧐');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
})

























































