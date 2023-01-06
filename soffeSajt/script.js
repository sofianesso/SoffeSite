const vader = document.getElementById('vader');
const sten = document.getElementById('sten');
const poäng = document.getElementById('poäng');


function jump()
{
    vader.classList.add('jump-animation');
    setTimeout(() => {
        vader.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    if(!vader.classList.contains('jump-animation'))
    {
    jump();
    }
    
});

setInterval(() => {
poäng.innerText++;

    const vaderTop = parseInt(window.getComputedStyle(vader)
    .getPropertyValue('top'));


    const stenVänster = parseInt(window.getComputedStyle(sten)
    .getPropertyValue('left'));

if(stenVänster < 0 ) {
sten.style.display = 'none';
} else {
    sten.style.display = '';
}

if(stenVänster < 50 && stenVänster > 0 && vaderTop > 150) {
    alert("YOU GOT A SCORE OF: " + poäng.innerText + 
    "\n\nPLAY AGAIN? YOU STUPID IDIOT!");
    location.reload();
}
} , 50);