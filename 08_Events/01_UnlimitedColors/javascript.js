const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

let body = document.querySelector('body');

let timer;

document.querySelector('#start').addEventListener('click', function(){
    if(!timer){
        timer = setInterval( function(){
        body.style.backgroundColor=randomColor();
    }, 1000);
    }
});

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(timer);
    body.backgroundColor=randomColor;
    timer = null;
});