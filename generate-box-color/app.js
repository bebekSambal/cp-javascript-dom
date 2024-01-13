const generatorColor = () => {
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);

    return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll('button');
const heads = document.querySelectorAll('h1');


for (let button of buttons) {
    button.addEventListener('click',colorize);
};

for (let head of heads) {
    head.addEventListener('click',colorize);
};

function colorize(){
    this.style.backgroundColor = generatorColor();
    this.style.color = generatorColor();
};