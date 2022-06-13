const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const start = () => {

    document.getElementById("text-start").style.color = "rgb(236, 236, 236)";

    pipe.classList.add('pipe-animation');

mario.src = './img/afa.jpeg';
mario.style.width = '75px'
mario.style.marginLeft = '50px'

function grassAnimation(){
    grass.classList.add('grass-animation');
        }setInterval(grassAnimation, 8000);


function floorAnimation1(){
    floor1.classList.add('floor-animation-1');
        }setInterval(floorAnimation1, 0);

function floorAnimation2(){
    floor2.classList.add('floor-animation-2');
        }setInterval(floorAnimation2, 0);
                       
function floorAnimation3(){
    floor3.classList.add('floor-animation-3');
        }setInterval(floorAnimation3, 3100); 
 
        
audioStart.play();
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');
   
    }, 500);

}

const loop = setInterval(() => {

    console.log ('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle (mario).bottom.replace('px', '');

    
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/afa.jpeg';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }    

}, 10);

document.addEventListener('keydown' , jump);

