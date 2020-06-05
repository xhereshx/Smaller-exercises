'use strict';


let myScoreEl = document.querySelector('.score-human');
const scoreComputerEl = document.querySelector('.score-bot');
const choiceHumanEl = document.querySelector('.choice-human');
const choiceComputerEl = document.querySelector('.choice-bot');
const resultEl = document.querySelector('.result-current');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');



let myScore = 0;

let botScore = 0;

let result = 0;

 let getComputerPlay = () =>{ 
 let options =  ['rock','paper','scissors']; 
 let computerChoise = options[Math.floor(Math.random() * options.length)];
 return computerChoise;
 
}

let play = (humanPlay) => {
 let computerplay = getComputerPlay();
  if(humanPlay === 'rock'){
    if(computerplay ==='paper'){
        result = botScore++;
    }else if(computerplay === 'scissors'){
        result = myScore++;
    }
    else {
        result = 'Tie';
    }
  } else if (humanPlay === 'paper'){
    if(computerplay ==='rock'){
    result = myScore++;
    }else if(computerplay === 'scissors'){
       result = botScore++;
    }
    else{
        result = 'Tie';
    }
  } else if(humanPlay === 'scissors'){
      if(computerplay === 'paper'){
          result = myScore++;
      }else if (computerplay === 'rock'){
          result = botScore++;
      } else 
          result =  'Tie';
      
    }

    else{
        return false;
    }

    scoreComputerEl.textContent = botScore;
    myScoreEl.textContent= myScore;
    choiceHumanEl.textContent = humanPlay;
    choiceComputerEl.textContent = computerplay;
    resultEl.textContent = result;   
    
    
   
}
rock.addEventListener("click", () => {
    play('rock');
});


paper.addEventListener("click", () => {
    play('paper');
})
scissors.addEventListener("click", () => {
    play('scissors');
})


  
    



    


