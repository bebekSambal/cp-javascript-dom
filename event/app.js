const clickMe = document.querySelector('#clickme')

clickMe.onclick = function() {
    console.log('click me');
}

clickMe.onmouseover = function(){
    console.log('jangan dekat2');
}

const eventbtn = document.querySelector('#eventbtn');
eventbtn.addEventListener('click', function () {
    alert('cliick...');
})