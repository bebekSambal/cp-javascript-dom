document.querySelector('button').addEventListener('click', () => {
    console.log('clicked');
});

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    switch (e.code){
        case 'ArrowUp' :
            console.log('tombol: panah Atas');
            break;
        
        case 'ArrowDown' :
            console.log('tombol: panah Bawa');
            break;
        default:
            console.log(' ignored');
    };
});

input.addEventListener('keyup', (e) => {
    console.log(`${e.code} dilepas`);
});