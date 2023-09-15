// variables for secret number and score and hig score

let guess_num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high = 0;
let message = document.querySelector('.message').textContent;
let backcolor = document.querySelector('body').style.backgroundImage;

//event code for click on check button to make comparison between nubers

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);

    // if no data inside input

    if(!guess){
        document.querySelector('.message').textContent = 'Please insert number';
        
        // if it is correct number

    }else if(guess === guess_num){
        document.querySelector('.message').textContent = 'you win';
        document.querySelector('.number').textContent = guess_num;
        document.querySelector('.number').style.width = '300px';
        document.querySelector('.number').style.backgroundColor = "rgb(13, 130, 220)";
        document.querySelector('.number').style.color = "black";
        document.querySelector('body').style.backgroundImage ="linear-gradient( to left,rgb(7, 52, 60),rgb(10, 92, 150))";
        
        if(score > high){
            high = score;
            document.querySelector('.high_1').textContent = high;      
        }
        // if it is too high number not correct

    }else if(guess > guess_num){
       if(score > 1){
        document.querySelector('.message').textContent = 'number too high';
        score--;
        document.querySelector('.score_1').textContent = score;
       }else{
        document.querySelector('.message').textContent = 'you lose';
        document.querySelector('.score_1').textContent = 0;
       }

       //if it is too low number not correct

    }else if(guess < guess_num){
       if(score > 1){
        document.querySelector('.message').textContent = 'number too low';
        score--;
        document.querySelector('.score_1').textContent = score;
       }else{
        document.querySelector('.message').textContent = 'you lose';
        document.querySelector('.score_1').textContent = 0;
        
       }
    }
});

// creat event for reset and play again

document.querySelector('.btn').addEventListener('click', function(){
    score = 20;
     guess_num = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = message;
    document.querySelector('body').style.backgroundImage = backcolor;
    document.querySelector('.score_1').textContent = score;
    document.querySelector('.number').style.width = "200px";
    document.querySelector('.number').style.backgroundColor = "rgb(3, 50, 77)";
    document.querySelector('.number').style.color ="rgb(16, 223, 223)";
    document.querySelector('.number').textContent = "?";
    
    document.querySelector('.guess').value = "";

});