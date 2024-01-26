const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');


let p1Score = 0;
p1Button.addEventListener('click',()=>{
    
    p1Score += 1;
    p1Display.textContent = p1Score;
});